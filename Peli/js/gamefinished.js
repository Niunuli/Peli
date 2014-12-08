var FrogAdventures = FrogAdventures || {};

FrogAdventures.gamefinished = function(){};

FrogAdventures.gamefinished.prototype = {

	create: function() {
	
		this.game.add.sprite(0, 0, 'background');
		this.game.add.sprite(170, 100, 'finished');
		this.button = this.game.add.button(350, 350, 'yes', this.onClickYes, this, 1, 0);
	
	},
	
	onClickYes: function() {
	
		this.state.start('mainmenu');
	}
};