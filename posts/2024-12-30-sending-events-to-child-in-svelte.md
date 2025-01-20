---
title: "Sending events to a child component in Svelte 5"
description: "Here is an extremely simple way to dispatch events to child components in Svelte 5."
date: '2024-12-30'
---

In Svelte 5, it's easy to dispatch events to parent components with a callback prop, and in Svelte 4 you can use `createEventDispatcher()` and dispatch an event. But what if you need to dispatch events in the opposite direction, from the parent component to the child? Admittedly the use-cases for this are rare. But I ran into such a case and wanted to share my solution.

## The code

My solution was to make a super simple emitter class. An emitter instance is passed to the child as a prop where it can assign a prop function to the `event` property of the emitter. 

ParentComponent.svelte:
```html
<script>
// ...omitting some code here

class Emitter {
  setEvent(fn) {
    this.event = fn;
  }
}
const emitter = new Emitter();
</script>

<ChildComponent getValue={(val) => handleResult(val)} {emitter} />
<button type="button" onclick={() => emitter.event()}>Click me</button>
```

Whenever the parent calls `emitter.event()` the child component can do whatever it needs to in the event function, which gets assigned in an effect. It can call a callback prop function to send a value back up to the parent component:

ChildComponent.svelte:
```html
<script>
	// ...omitting some code here

	let { emitter, getValue } = $props();

	$effect(() => {
		emitter.setEvent(() => {
      // do something here react to the event and/or get a value
      getValue(value)
    });
	});
</script>
```
Here's an <a href="https://svelte.dev/playground/2982766e82b74f0a8f2e115db0af9aab?version=5.16.0">example of this</a> in the svelte playground.

## Why?

As I mentioned, the use cases for this are rare, but there are legitimate ones. For getting values from a child component the simplest thing to do would be to use a `$bindable()` prop. But sometimes you need the child component to react to an event.

In my case I am using <a href="https://threlte.xyz/">Threlte</a>, the Svelte wrapper around Three.js. The way you compose components in Threlte is to have a container which holds the `<Canvas />` element, and inside that you nest a scene component. I have a button in my canvas component to export an image of the canvas, but to get the image, you need to use the renderer, which is only accessible through a `useThrelte` hook in the scene. I couldn't put the button in the scene, so when clicking the button, I needed the child scene component to export the image via the renderer, how it looked at that exact moment.

I hope you enjoyed this snippet. Stay tuned for more fronted dev articles.