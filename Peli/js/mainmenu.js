FrogAdventures.mainmenu = function(){};

FrogAdventures.mainmenu.prototype = {
	create: function() {
		// Show the main menu background
		this.background = this.game.add.sprite(0, 0, 'frontpage');
		
		// Move logo to it's place
		var image = this.game.add.sprite(0, 0, 'logo');
		//(500, 20, 'logo');
		
		//image.body.velocity.x = 150;
		//image.body.velocity.y = 150;
		
		// Show the main menu buttons
		this.image = this.game.add.sprite(540, 300, 'start');
		//image.events.onInputDown.add(listener, this);
		this.image = this.game.add.sprite(540, 380, 'help');
		this.image = this.game.add.sprite(540, 460, 'quit');
		
	}

};