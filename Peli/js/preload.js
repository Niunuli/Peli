var FrogAdventures = FrogAdventures || {};

FrogAdventures.Preloader.prototype = {

	preload: function () {

	this.game.load.spritesheet('fly', 'assets/fly.png', 15, 24);
	this.game.load.spritesheet('frog', 'assets/frogi.png', 38, 40);
	this.game.load.image('front', 'assets/Game_frontpage.jpg');
	this.game.load.image('bg', 'assets/background.jpg');
    this.game.load.image('ground', 'assets/platform.png');
    this.game.load.image('start', 'assets/start.png');
	this.game.load.image('logo', 'assets/logo.png');
	this.game.load.image('quit', 'assets/quit.png');
	this.game.load.image('help', 'assets/help.png');

	},

	create: function () {

		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		//this.preloadBar.cropEnabled = false;
	this.state.start('MainMenu');
	},
	

};
