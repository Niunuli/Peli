FrogAdventures.mainmenu = function(){};

FrogAdventures.mainmenu.prototype = {
	create: function() {
	
		// Show the main menu background
		this.background = this.game.add.sprite(0, 0, 'frontpage');
		
		// Move logo to it's place
		this.image1 = this.game.add.sprite(500, 20, 'logo');
		//this.body.accelerateToXY(image1, 500, 20, 100);
		//this.image1.accelerateToXY('logo', 500, 20, 100);
		
		// Show the main menu buttons
		this.button1 = this.game.add.button(540, 300, 'start', this.actionOnClick, this, 1, 0);
		this.button1.name = 'start';
		this.button2 = this.game.add.button(540, 380, 'help', this.actionOnClick, this, 1, 0);
		this.button2.name = 'help';
		this.button3 = this.game.add.button(540, 460, 'quit', this.actionOnClick, this, 1, 0);
		this.button3.name = 'quit';

	},
	
	actionOnClick: function() {
	
		if (button.name == 'start')
		{
			this.state.start('level1');
		}
		else if (button.name == 'help')
		{
			this.state.start('help');
		}
		else if (button.name == 'quit')
		{
			window.game.close();
		}
	}

};