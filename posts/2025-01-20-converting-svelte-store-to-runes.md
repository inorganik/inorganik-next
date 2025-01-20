---
title: "Converting global Svelte stores to runes"
description: "Runes in Svelte 5 are a big change from the store pattern in Svelte 4. Let's look at how to migrate your stores to runes."
date: '2025-01-20'
---

Runes in Svelte 5 are a big change from the store pattern in Svelte 4. For some things, you should keep your stores, but runes are more concise and more compatible with Svelte 5 components. So in this article, I'll explain how you can migrate your global, singleton stores to runes.

First, let's look at a common pattern for creating global stores in Svelte 4, which was to write a function that returns a custom store, and export an instance of it. It looked something like the following - in this example the store holds an array of objects which each represent a different block color and quantity. It could include other methods for doing certain updates to the blocks array.

lib/state/block.store.ts
```ts
// TODO: update to runes!
function createBlockStore() {
  const { subscribe, set, update } = writable<Blocks[]>([]);
  return {
    subscribe,
    set,
    update,
    addToBlocks: (id: number, quantity: number) => {
      update((newBlocks) => {
        const existing = newBlocks.find(
          (b: Blocks) => b.id === blocks.id
        )
        if (existing) {
          existing.quantity += blocks.quantity
        } else {
          newBlocks.push(blocks)
        }
        return newBlocks
      })
    },
    ...
  }
}
export const blockStore = createBlockStore()
```

For runes, we simply write a class which can hold any amount of properties defined by runes - plus methods to update them, so they are consolidated to one place. You could keep the function format, but it requires you to write getters and setters which are less concise than using a class. Make sure the file name ends with "svelte.ts" or "svelte.js" to enable runes.

lib/state/store.svelte.ts
```ts
class BlockStore {
  blocks = $state<Blocks[]>([]);
	total = $derived(this.blocks.reduce((acc, curr) => acc + curr.quantity, 0));
	
	addToBlocks(blocks) {
		const existing = this.blocks.find(b => b.id === blocks.id);
		if (existing) {
			existing.quantity += blocks.quantity;
		} else {
			this.blocks.push({
				...blocks,
				id: this.blocks.length + 1
			});
		}
	}
}
export const blockStore = new BlockStore();
```

If you're curious, here's the equivalent in function form:

```ts
function createBlocksStore() {
	let blocks = $state<Blocks[]>([]);
	let total = $derived(blocks.reduce((acc, curr) => acc + curr.quantity, 0));
	
	return {
		get blocks() {
	    return blocks;
	  },
	  set blocks(newBlocks) {
	    blocks = newBlocks;
	  },
	  get total() {
	    return total;
	  },
		addToBlocks: (newBlocks) => {
			const existing = blocks.find(b => b.id === newBlocks.id)
			if (existing) {
				existing.quantity += newBlocks.quantity;
			} else {
        blocks.push({
				...blocks,
				id: blocks.length + 1
			});
      }
		}
	}
}
export const blockStore = createBlockStore();
```

For either of these approaches, you can reference and mutate the state properties directly on the store object in your components:

components/BlockList.svelte
```html
<script>
	import { blockStore } from './store.svelte';
</script>

<ul>
	{#each blockStore.blocks as block (block.id)}
		<li>
			<ColorSwatch color={block.color} />
			{block.name}: {block.quantity}
		</li>
	{/each}
</ul>
<p>Total blocks: {blockStore.total}</p>
```

If you would like to play with these examples, I've created playgrounds for each one:
- [Class example](https://svelte.dev/playground/cc2b07014d8b4e4bb62bd78165cb1237?version=5.17.3)
- [Function example](https://svelte.dev/playground/5ea7ad30f8404f0b8a11315a3bb133f6?version=5.17.3)

Thanks for reading, and see you in the next article!

_Thanks to HenryKrinkle on the Svelte discord_