# General concepts

## Defining a game

The best way to look at a video game is think of it as a small world. At the base it contains the world itself where all objects live. This world has some rules that all objects must obey.

The objects themselves are divided into static objects that don't interact, and objects that can interact.

A sandbox game would fit the above description perfectly, but most games also contain more than the game world alone. They guide the player through a fascinating story (or multiple stories). So in that sense, a game could also be thought of as a movie, were the player experiences an adventure going from one situation to the next.

Now what does this all have to do with RPG Playground? Well, when designing your game, it's important to understand the fundamental concepts of how your game is composed. If you understand the general philosophy behind an RPG Playground game, it's easier to create your game exactly as you want it.

## Namings

RPG Playground borrows a lot of terms from film and theater to describe the different concepts that make up a game.

First of all, a part of the game world is called a *level*. The interactive objects that live in that world are called *actors*, and the static objects are called *scenery*. The *map* are all the static objects where the actors live.

### Level

A level is a small game world that contains:

-   A map, such as a tilemap representing grass, dirt, water, ... .
-   Scenery such as houses, trees, ... .
-   Several actors, such as the main hero, enemies, ... .

A game is composed out of different scenes. Most of the time, only 1 scene is displayed at a time. But it is possible that multiple scenes are shown at the same time. This can be the case when using a game head-up-display for example. The head-up-display or HUD is a different scene, but is shown together with the main level scene.

### Map

A map in our context, is the place or world where the actors live. RPG Playground uses a tilemap as map, but you could imagine other maps such as a side-scroller maps or isometric tilemaps.

The map partly defines how actors can move around, what their position is, etc.

### Scenery

A map can contain static objects, and these are called scenery. Things such as trees, bridges, houses, etc. are all scenery. They contain no interaction, although they can be animated.

The difference between scenery and actors is that scenery doesn't interact with the player or with the game world.

### Actors

Actors are the interactive part of the game. Examples are the main hero, enemies, animals, etc. . But remark that interactive objects such as doors, treasure chests, moving cars, etc. are also described as actors. They play an interactive role inside our game, and are therefore called actors.

## The Project Panel

Now that you know the basic components of an RPG Playground game, let's see how we can work with it in practice.

When your game is running, on the top-left there is an *open project panel* button. When clicking it, the project panel will open on the left side of the screen. Close this dialog and resume your game by pressing the *close project panel* button on the top-right.

The project panel contains the following tabs:

-   Scenery: add and remove scenery such as trees, buildings, tables, etc. to your level
-   Actors: add and remove game characters and monsters
-   Project tree: overview of your complete game, data and resources
-   Settings: settings of the currently selected actor, level, ...

### Menu button

Maximise RPG Playground over your entire screen. Not available in games yet.