FrogAdventures.mainmenu = function(){};

FrogAdventures.mainmenu.prototype = {
	create: function() {
	
		// Show the main menu background
		this.background = this.game.add.sprite(0, 0, 'frontpage');
		
		// Move logo to it's place
		this.image = this.game.add.sprite(500, 20, 'logo');
		//this.body.accelerateToXY(image1, 500, 20, 100);
		//this.image1.accelerateToXY('logo', 500, 20, 100);
		
		// Show the main menu buttons
		this.button = this.game.add.button(540, 300, 'start', this.onClickStart, this, 1, 0);
		this.button = this.game.add.button(540, 380, 'help', this.onClickHelp, this, 1, 0);
		this.button = this.game.add.button(540, 460, 'quit', this.onClickQuit, this, 1, 0);
	},
	
	onClickStart: function() {
	
		this.state.start('level1');
	},
	
	onClickHelp: function(){
	
		this.state.start('help');
	},
	
	onClickQuit: function() {
		
		this.state.start('areyousure');
	}

};