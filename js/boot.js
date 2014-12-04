var FrogAdventures = FrogAdventures || {};

FrogAdventures.boot = function(){};

// Setting game configuration and loading the assets for the loading screen
FrogAdventures.boot.prototype = {
	preload: function() {
		// Assets we'll use in the loading screen
		this.load.image('logo', 'assets/images/logo.png');
	},
	
	create: function() {

		// Loading screen will have a white background
		this.game.stage.backgroundColor = '#fff';
		
		// Scaling options
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		
		// Have the game centered horizontally
		this.scale.pageAlignHorizontally = true;
		
		// Physics system for movement
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		
		this.state.start('preload');
	}
};