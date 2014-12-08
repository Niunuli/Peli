var FrogAdventures = FrogAdventures || {};

FrogAdventures.gameover = function(){};

FrogAdventures.gameover.prototype = {

	init: function(score) {
	
		this.score = score;
	},

	create: function() {
	
		// Create background
		this.game.add.sprite(0, 0, 'background');
		
		// Create 'game over' text
		this.game.add.sprite(200, 180, 'gameover');
		
		// Create yes button witch moves player back to main menu
		this.button = this.game.add.button(325, 350, 'yes', this.onClickYes, this, 1, 0);
		
		// The score
		this.scoreText = this.game.add.text(290, 260, 'Your score: ' + this.score, { fontSize: '32px', fill: '#FFFFFF' });			
	},
	
	onClickYes: function() {
	
		this.state.start('mainmenu');
	}

};