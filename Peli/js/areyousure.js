var FrogAdventures = FrogAdventures || {};

FrogAdventures.areyousure = function(){};

FrogAdventures.areyousure.prototype = {

	create: function() {
	
		this.game.add.sprite(0, 0, 'background');
		this.game.add.sprite(90, 125, 'confirm');
		this.button = this.game.add.button(275, 320, 'yes', this.onClickYes, this, 1, 0);
		this.button = this.game.add.button(425, 320, 'no', this.onClickNo, this, 1, 0);
	},
	
	onClickYes: function() {

		window.close();
	},
	
	onClickNo: function() {
	
		this.state.start('mainmenu');
	}
};