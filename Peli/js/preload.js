var FrogAdventures = FrogAdventures || {};

// Loading the game assets
FrogAdventures.preload = function(){};

FrogAdventures.preload.prototype = {

	preload: function () {
		// Load game assests
		this.game.load.spritesheet('fly', 'assets/fly.png', 15, 24);
		this.game.load.spritesheet('frog', 'assets/frogi.png', 38, 40);
		this.game.load.image('frontpage', 'assets/images/Game_frontpage.jpg');
		this.game.load.image('background', 'assets/background.jpg');
		this.game.load.image('ground', 'assets/platform.png');
		this.game.load.image('start', 'assets/images/start.png');
		this.game.load.image('logo', 'assets/images/logo.png');
		this.game.load.image('quit', 'assets/images/quit.png');
		this.game.load.image('help', 'assets/images/help.png');
	},

	create: function() {

		this.state.start('mainmenu');
	}
};
