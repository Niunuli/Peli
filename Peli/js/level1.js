var FrogAdventures = FrogAdventures || {};

//title screen
FrogAdventures.level1 = function(){

	var player;
	var ground;
	var platforms;
	var cursors;

	var flies;
	var score = 0;
	var scoreText;
};

FrogAdventures.level1.prototype = {
	
	create: function() {
  
  
	},
  
  
	update: function() {
	
	},
	
	
	collectfly: function  (player, fly) {
    
    // Removes the fly from the screen
    fly.kill();

	//  Add and update the score
    score += 10;
    scoreText.text = 'Score: ' + score;

}
	
	};