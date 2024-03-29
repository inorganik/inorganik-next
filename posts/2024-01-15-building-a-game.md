---
title: "I'm building a supply chain logistics game with Svelte and Supabase"
description: "Cities 4 Sale is a massively multiplayer online idle game coming soon"
date: '2024-01-15'
---

Last summer I began in earnest development of my new supply chain logistics game, “Cities 4 Sale”, which is a MMOIG - massively multiplayer online idle game.

Svelte has been a joy to use because everything is so damn simple and it seems to have everything you need built in. The project uses 3D graphics, so I have been using Threlte which is a Svelte wrapper for Three.js. Threlte has a very active dev community and is also really nice to work with.

Supabase has been enjoying the spotlight lately and I can understand why. As someone who has extensively used Firebase, I was already sold on the backend-as-a-service idea, but pairing it with Postgres instead of a proprietary NoSQL DB really makes it nice to work with.

## The game

Players can purchase cities to farm blocks or build products. The in-game cities represent cities in the real world, and the price is based on population. The cool thing is that if you own a city, you are the only owner of that city game-wide. This creates an interesting scarcity mechanic that adds more value to city ownership.

[![Cities 4 Sale - Map](/images/posts/building-a-game/map-screen.png)](https://inorganik.net/images/posts/building-a-game/map-screen.png)

In cities, you farm blocks or build products, depending on the size of the population. The products require a specific “recipe” of blocks to build. 

“The products?” you ask? These are one-of-a-kind voxel-style 3D models that come in a series, and there is a new one each week. When purchased, they earn you gems, which in turn can be used to purchase upgrades for your cities. Here’s the first product series!

[![Cities 4 Sale - Video game series](/images/posts/building-a-game/first-product-series.png)](https://inorganik.net/images/posts/building-a-game/first-product-series.png)

To build products, blocks must be purchased from other cities in the correct color and quantity according to the product’s recipe. And yes, how far away that city selling the blocks is matters, because the further away, the longer it will take you to get the blocks.

Cities, blocks and products each have their own real-time market. Buying and selling things to increase your capital is the name of the game. Own the biggest cities to secure your place on the leaderboard!

I hope to start inviting beta testers in the coming months. Have a suggestion? I’d love to hear it! Thanks for reading.