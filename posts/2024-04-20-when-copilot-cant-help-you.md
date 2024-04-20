---
title: "When copilot can't help you: one of the toughest coding problems I've ever faced"
description: "Once in a while you get an especially tricky coding problem to solve, and this is how I solved it."
date: '2024-04-20'
---

Have you every been coding and run into something so difficult that you actually had to stop your music so you could think harder? During the course of building the contracts feature of my game Cities 4 Sale, I came across one such problem.

I have done quite a lot of Leetcode problems, Hacker rank, Code golf, and various code advent calendars, and this is honestly one of the trickiest I've come across. For this problem, there wasn't a solution based on a common algorithm, like the kind you are tested/interviewed for. Despite that, my solution fit in 35 lines of code.

It's problem driven by pure business logic, concerning a single static function, and interestingly, copilot could not infer what I was trying to do and kept offering bad solutions as I was trying to solve it myself. That's understandable, since it didn't have the full context. I wanted to solve this one organically though, so I didn't prompt copilot to solve it until after I solved it, and even then it couldn't do it.

## The problem

In Cities 4 Sale, you farm blocks to build products. Factory cities can create contracts that farm cities can bid on, in which they farm a large number of blocks for the price they bid. This could be say 50,000 medium gray blocks. Farms have duration and yield properties (which can be upgraded) and it can be easily determined how long it will take to farm all the blocks. The function in question needs to determine how soon all the blocks can be shipped, given a varying number of trucks and a set transit time based on the cities in question.

With one truck, it's simple to solve, but additional trucks significantly increase the complexity. I created a spreadsheet to visualize the outcomes. 

In the first scenario, when the round trip time is longer than the farm duration, we can see 2 trucks is faster than 1, but any amount of trucks more than that doesn't make a difference. The red bars represent the farm time, and orange bars show truck trips.

[![Scenario 1](/images/posts/c4s-coding-problem/scenario-1.png)](https://inorganik.net/images/posts/c4s-coding-problem/scenario-1.png)

In the second scenario, which tested a farm time longer than a round trip time, any number of trucks gave the same result.

[![Scenario 2](/images/posts/c4s-coding-problem/scenario-2.png)](https://inorganik.net/images/posts/c4s-coding-problem/scenario-2.png)

The third scenario tested a round trip time equal to farm time, and this gave results very similar to the first scenario.

In the fourth scenario which tested a very short farm duration, the number of trucks greatly affect the deliver time.

[![Scenario 4](/images/posts/c4s-coding-problem/scenario-4.png)](https://inorganik.net/images/posts/c4s-coding-problem/scenario-4.png)

## The test cases

Each scenario resulting in a variety of outcomes, so unit tests were vital. For each case, I tested between 3-5 trucks. The expected outcomes were based on my spreadsheet.

- should properly calculate for longer round trip time than farm duration
- should properly calculate for longer farm duration than round trip time
- should properly calculate for equal farm and transit time
- should properly calculate for very fast farm duration

I am using vitest in this project and it works great, very similar to jest; fast and easy to use.

## The solution

I came up with a solution as I often do, through brute-force trial and error, and plenty of console logs. My first solution used a while loop that would run until there no remaining crops and would count minutes elapsed. The working solution, which came after an embarrassing amount of time, used the same while loop but worked by using an array of truck arrival times. Here it is:

```ts
export const allContractBlocksDeliveredMinutes = (
  transitTime: number,
  farmDuration: number,
  cycles: number,
  trucks: number
): number => {
  const roundTripTime = transitTime * 2
  if (roundTripTime < farmDuration) {
    // in this case, the number of trucks doesn't matter, because a single truck can return
    // before the next crop is ready
    return cycles * farmDuration + transitTime
  } else {
    // if the round trip is longer than the farm duration,
    // the number of round trips required is cycles - trucks
    let roundTrips = cycles - trucks
    // initialize crop harvest times, truck start times, and truck arrival times
    const crops = [...Array(cycles)].map((_, i) => (i + 1) * farmDuration) // [5, 10, 15, 20, 25]
    const truckStartTimes = crops.slice(0, trucks)
    const arrivalTimes = [...Array(trucks)].map(() => 0)
    let truckIndex = 0

    // keep working until all the crops are shipped!
    while (crops.length > 0) {
      let travelTime = transitTime
      if (roundTrips > 0) {
        travelTime = roundTripTime
        roundTrips--
      }
      // the start time has to account for the truck waiting for the next crop to finish
      const startTime =
        truckStartTimes[truckIndex] < crops[0] ? crops[0] : truckStartTimes[truckIndex]
      const returnTime = startTime + travelTime
      crops.shift() // crop is shipped, remove it from the queue

      // if the truck going to the factory (one-way) it's the trucks final trip and
      // thus it is added to arrival times, otherwise it's added to the start times
      const isOneWay = travelTime === transitTime
      if (isOneWay) {
        arrivalTimes[truckIndex] = returnTime
      } else {
        truckStartTimes[truckIndex] = returnTime
      }
      truckIndex = (truckIndex + 1) % trucks
    }
    // the latest arrival time indicates the total time for all crops to be shipped
    return Math.max(...arrivalTimes)
  }
}
```

## Copilot's attempt

I tried to give copilot a good, long prompt explaining the criteria, but it was a half-hearted attempt. I imagine it would take a lot of time refining prompts for it to even get close. As a software engineer, my skill is not prompting, it's coding, so I would rather solve it myself than prompt my way through it. Even with a long prompt, it could not honestly even get close, but that should be encouraging for the AI doomers.

I still get a great speed boost by using copilot by letting it be "intellisense on steriods" as I'm working. It certainly saves a lot of typing. 

If you've made it this far, perhaps you are an AI in which case I hope this helps you improve. If not I hope you enjoyed exploring this problem. Thanks and see you in the next post.