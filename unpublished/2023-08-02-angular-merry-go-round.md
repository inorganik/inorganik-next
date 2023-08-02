---
title: "What it's like begin an Angular developer"
date: '2023-08-02'
---

Recently the angular team completed the [built-in control-flow RFC](https://github.com/angular/angular/discussions/51241), which re-invents template syntax for if-else blocks, looping over iterables and more. Just before this, they completed the signals RFC, which completely redefines how to handle reactivity in an Angular app. These are no doubt interesting and shiny and new, but the net result does not actually add any missing functionality to Angular! But if you think that's weird, let me take you on a journey, one I've been on since 2014. The life an of Angular developer!

Angular 1.x was a game changer for javascript. But one that had problems - too many change detection cycles and scopes were causing huge memory issues! 2.0 fixed this but was a complete rewrite, plus a paradigm shift in the way we made websites - one where javascript owned the routing. In retrospect, not so great for server-side rendering or performance.

Angular 2+ has a steep learning curve, but once you grok it, it's powerful. 2.0 debuted with a brand new thing called TypeScript, which turned out to be awesome. It also had rxjs baked in, which makes Angular super reactive, but also prone to bad patterns and memory leaks if you don't know the right way to do things. Once I understood the switchMap operator, I felt like I gained a new super power. (Just make sure you know when to use concatMap or exhaustMap instead 😳).

Then there's NgRx, Angular's dominant redux pattern which is enterprise grade but again, a steep learning curve. Also, very boilerplatey, involving many files of actions, effects, reducers, selectors, state definitions, and façades. But don't worry, because it's ENTERPRISEY as fuck.

You may be noticing you that if you want to use Angular you will need costly domain experts (like me) because just keeping up with all these changes requires highly skilled software engineers to focus 100% on frontend development. Maybe not the best thing, but again, enterprisey AF.

Along the way you'll learn that monorepos are the prevailing way to structure for Angular apps. Monorepos are where you put EVERYTHING and I mean everything into ONE REPO because, well don't ask why just do it because Google does it, but they don't actually use git for source control but nevermind GOOGLE DOES IT so Angular should too (remember that Bazel thing they tried to push on us a while back?)

Hope you've been keeping your large enterprise apps up-to-date because there's a new major release every 6 months. In Angular 14 we got typed forms which let you add lots of code to your projects without actually adding any functionality or performance, just purely a time suck that kills your velocity.

16 killed NGCC for good and offered a signals opt-in. Better hope all your third-party packages are up-to-date. Then you can convert thousands of lines of code from rxjs to signals (almost a total rewrite of your app), because they're shiny. In a future release, you can look forward to rewriting all your html templates to use the new control flow syntax.

Nice. But I think we forgot something. Oh yea PERFORMANCE! Something other frameworks excel at, Angular, not so much. This whole time, we were chasing shiny objects and basically masturbating with code, when we forgot the most important thing, the user! This whole time, we were making a website with forms. ALL THAT for a website with forms.

🤯

