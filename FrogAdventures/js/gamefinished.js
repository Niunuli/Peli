var FrogAdventures = FrogAdventures || {};

FrogAdventures.gamefinished = function(){};

FrogAdventures.gamefinished.prototype = {

	init: function(score) {
	
		this.score = score;
	},

	create: function() {
	
		// Create background
		this.game.add.sprite(0, 0, 'background');
		
		// Create 'finished' text
		this.game.add.sprite(170, 100, 'finished');
		
		// Create button witch moves player back to main menu
		this.button = this.game.add.button(350, 350, 'yes', this.onClickYes, this, 1, 0);

		// The score
		this.scoreText = this.game.add.text(300, 270, 'Your score: ' + this.score, { fontSize: '32px', fill: '#FFFFFF' });			
	
	},
	
	onClickYes: function() {
	
		this.state.start('mainmenu');
	}
};