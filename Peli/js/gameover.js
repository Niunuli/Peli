var FrogAdventures = FrogAdventures || {};

FrogAdventures.gameover = function(){};

FrogAdventures.gameover.prototype = {

	create: function() {
	
		this.game.add.sprite(0, 0, 'background');
		this.game.add.sprite(200, 180, 'gameover');
		this.button = this.game.add.button(325, 350, 'yes', this.onClickYes, this, 1, 0);
	},
	
	onClickYes: function() {
	
		this.state.start('mainmenu');
	}

};