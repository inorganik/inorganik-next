---
title: "A simple hash-routed dialog system with Svelte"
date: '2023-10-08'
---

For my project I wanted to be able to open certain dialogs from any component in my app, such as login and settings dialogs. I wanted to do this _without_ context or emitting click handlers, and without inserting the same dialog components all over the place. With this solution, you can have a single instance of your dialogs and have them open based on the url hash. To open a dialog you can simply use an anchor:

```html
<a href="#login">Login</a>
```

The second thing is, I wanted a dialog component without using any third-party UI libraries. And guess what? Native HTML gives us the `<dialog>` element which has some special abilities. So this solution is dependency-free! We'll look at `<dialog>` in a moment. First let's create a hash store.

## Hash store

lib/state/hash.js:
```js
import { writable } from 'svelte/store'

export function createHashStore() {
  if (typeof window === 'undefined') {
    const { subscribe } = writable('')
    return { subscribe }
  }

  const hash = writable(window.location.hash)

  function updateHash() {
    hash.set(window.location.hash)
  }
  window.removeEventListener('hashchange', updateHash, true)
  window.addEventListener('hashchange', updateHash, true)

  return hash
}

export default createHashStore()
```

This code creates a store that updates every time the hash of the url changes, and is based on a [url store](https://github.com/bluwy/svelte-url/blob/master/src/url.js) snippet by Svelte core team member Bjorn Lu. You can import this store in as many components as you like and it only ever creates one store. You use it like this:

MyComponent.svelte:
```html
<script>
  import hash from '$lib/state/hash.js'

  $: dialogOpen = $hash === '#login'
</script>

```

Now `dialogOpen` automatically updates to `true` if the hash matches "#login". From here, you can bind `dialogOpen` to the dialog's `open` attribute, or use it to call the dialog's `showModal()` method.

## The dialog element

`<dialog>` is something I stumbled across, as I have been using UI component libraries for so long that I didn't realize how far html and browser support has come. With the native dialog, you get an accessible, versatile dialog with no extra packages.

By just getting a reference to the dialog element, you have access to special methods, `dialog.showModal()` and `dialog.close()`. Check out the [docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) for more. I find it the simplest to just bind our `dialogOpen` property to the dialog's `open` attribute, like so:

MyComponent.svelte:
```html
<script>
  import hash from '$lib/state/hash.js'

  $: dialogOpen = $hash === '#login'
</script>

<dialog open={dialogOpen}>
  ...
```

## In closing (the dialog)

We can listen for the dialog's close event to update the hash and react to any input provided like so:

```html
<script>
  ...

  function handleClose() {
    window.location.hash = '';
    // do stuff
  }
</script>

<dialog open={dialogOpen} on:close={handleClose}>
  ...
```

It's worth mentioning, if you have a form inside your dialog, there are some special things you can do. For instance if you set the form's `method` attribute to "dialog", submitting it will close the dialog. In addition, if you place a button like this in your form, it will close the dialog:

```html
<button value="foo" formmethod="dialog">Close</button>
```
For either of these methods, `dialog.returnValue` will get set with the value of the button, in this case "foo".

## Conclusion

Dialogs are shown and hidden with the display property, but there is a lot of opportunity for styling improvement here. Open dialogs have the `open` attribute which can be used for an open dialog selector in your CSS, e.g. `dialog[open]`. 

I personally really like how [Daisy UI](https://daisyui.com/components/modal/), a Tailwind add-on handles dialogs. You get a really nice fade-and-scale animation simply by adding the "modal" class, no javascript required.

I hope this was useful for your Svelte project. Check back later for more frontend development articles!