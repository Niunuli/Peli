var FrogAdventures = FrogAdventures || {};

FrogAdventures.boot = function(){};

// Setting game configuration and loading the assets for the loading screen
FrogAdventures.boot.prototype = {
	preload: function() {
		// Assets we'll you in the loading screen
		this.load.image('frontpage', 'assets/frontpage.jpg');
	},
	
	create: function() {
		
		// Have the game centered horizontally
		this.scale.pageAlignHorizontally = true;
		
		// Screen size will be set automatically
		this.scale.setScreenSize(true);
		
		// Physics system for movement
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		
		this.state.start('preload');
	}
};