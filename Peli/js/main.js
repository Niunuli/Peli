var FrogAdventures = FrogAdventures || {};

FrogAdventures.game = new Phaser.Game(800, 600, Phaser.AUTO, '');

FrogAdventures.game.stage.add('boot', FrogAdventures.boot);
//FrogAdventures.game.state.add('preload', FrogAdventures.preload);
//FrogAdventures.game.state.add('mainmenu', FrogAdventures.mainmenu);
//FrogAdventures.game.state.add('level1', FrogAdventures.level1);
//FrogAdventures.game.state.add('level2', FrogAdventures.level2);
//FrogAdventures.game.state.add('level3', FrogAdventures.level3);

FrogAdventures.game.state.start('Boot');