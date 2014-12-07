var FrogAdventures = FrogAdventures || {};

// Loading the game assets
FrogAdventures.preload = function(){};

FrogAdventures.preload.prototype = {

	preload: function () {
		// Load game assets
		this.game.load.spritesheet('fly', 'assets/fly.png', 15, 24);
		this.game.load.spritesheet('snake', 'assets/snake.png', 88, 60);
		this.game.load.spritesheet('frog', 'assets/frogi.png', 38, 40);
		this.game.load.spritesheet('start', 'assets/start.png', 230, 70);
		this.game.load.spritesheet('quit', 'assets/quit.png', 230, 70);
		this.game.load.spritesheet('help', 'assets/help.png', 230, 70);
		this.game.load.spritesheet('door', 'assets/flower.png', 65, 63);
		this.game.load.image('frontpage', 'assets/Game_frontpage.jpg');
		this.game.load.image('background', 'assets/background.jpg');
		this.game.load.image('ground', 'assets/ground.jpg');
		this.game.load.image('platform', 'assets/platform.jpg');
		this.game.load.image('logo', 'assets/logo.png');
	},

	create: function() {

		this.state.start('mainmenu');
	}
};
