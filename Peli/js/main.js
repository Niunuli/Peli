var FrogAdventures = FrogAdventures || {};

FrogAdventures.game = new Phaser.Game(800, 600, Phaser.AUTO, '');

FrogAdventures.game.state.add('boot', FrogAdventures.boot);
FrogAdventures.game.state.add('preload', FrogAdventures.preload);
FrogAdventures.game.state.add('mainmenu', FrogAdventures.mainmenu);
FrogAdventures.game.state.add('help', FrogAdventures.help);
FrogAdventures.game.state.add('level1', FrogAdventures.level1);
FrogAdventures.game.state.add('level2', FrogAdventures.level2);
FrogAdventures.game.state.add('level3', FrogAdventures.level3);
FrogAdventures.game.state.add('gameover', FrogAdventures.gameover);

FrogAdventures.game.state.start('boot');