# Final Fantasy Brave Exvius: Chaining Visualizer and Macro Generator

Chaining attacks in FFBE is difficult to visualize due to the inconsistent amount of time between attacks for each character.  Additionally, it can be nearly impossible to perform a good chain consistently.  This tool will help you build a long chain and when you find a great combination of attacks, you can save the attack in your localStorage or generate a macro to use with an Android emulator.

[screenshot](https://github.com/ronwthompson/ffbechaining/blob/master/screenshot.png)

## Getting Started

This webapp is standalone and requires no installation.  Please see the [live demo](http://ronwthompson.com/ffbechaining/index.html) to get started.

For each of the character boxes, which are oriented in the same order as in game (for example, the upper left character in the webapp will be the upper left character in-game), choose a character.  Once chosen, the character's abilities will be loaded into the ability dropdown menu.  Choose an ability and the skill's frame data will be loaded both in the character box and in the visualizer.  Check the dual weild/cast checkbox if the character has the ability and it is applicable.  Repeat for each character box.  Once all characters and skills are selected, move the frame delay for each character (by clicking on the up/down boxes in each character box) to find the highest chain you can.

## Built With

* [ES6](http://es6-features.org/) - Javascript ES6

## Authors

* **Ronald Thompson** - [Ronald's GitHub](https://github.com/ronwthompson)

## Contributing

Data for each character is taken from [aEnigmatic](https://github.com/aEnigmatic)

If you would like to contribute, please send me a message!

## Acknowledgments

* The [FFBE subreddit](https://www.reddit.com/r/FFBraveExvius/) for taking the time to test the app and providing feedback
