var FrogAdventures = FrogAdventures || {};

FrogAdventures.help = function(){};

FrogAdventures.help.prototype = {

	create: function() {
	
		this.game.add.sprite(0, 0, 'background');
		this.game.add.sprite(50, 50, 'howtoplay');
		this.button = this.game.add.button(650, 30, 'close', this.clickClose, this, 1, 0);
	},
	
	clickClose: function() {
		this.state.start('mainmenu');
	}
};