var FrogAdventures = FrogAdventures || {};

//title screen
FrogAdventures.level1 = function(){

	/*var player;
	var ground;
	var platforms;
	var cursors;

	var flies;
	var score = 0;
	var scoreText;*/
};

FrogAdventures.level1.prototype = {
	
	create: function() {
		// create background
		this.game.add.sprite(0, 0, 'background');

		// contains ground and ledges, enabling physics to the group
		this.platforms = this.game.add.group();
		this.platforms.enableBody = true;

		// create the ground
		this.ground = this.platforms.create(0, this.game.world.height - 64, 'ground');

		// scale it to fit the width of the game
		this.ground.scale.setTo(1, 1);

		// stops it from falling when you jump on it
		this.ground.body.immovable = true;

		// create two ledges
		this.ledge = this.platforms.create(400, 400, 'platform');
		this.ledge.body.immovable = true;

		this.ledge = this.platforms.create(-150, 250, 'platform');
		this.ledge.body.immovable = true;

		// player and its settings
		this.player = this.game.add.sprite(38, this.game.world.height - 150, 'frog');
		this.fly = this.game.add.sprite(15, 24, 'fly');

		// enabling physics on the player
		//this.game.physics.arcade.enable(player);

		// player physics properties
		/*this.player.body.bounce.y = 0.2;
		this.player.body.gravity.y = 300;
		this.player.body.collideWorldBounds = true;*/

		// breathing player
		this.player.animations.add('still', [0, 1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 7, 7, 7, 7], 10, true);

		// moving left and right
		this.player.animations.add('left', [8, 9, 10, 11, 12, 13, 14, 15], 10, true);
		this.player.animations.add('right', [16, 17, 18, 19, 20, 21, 22, 23], 10, true);

		//  Finally some flies to collect
		this.flies = this.game.add.group();
		
		//  We will enable physics for any fly that is created in this group
		this.flies.enableBody = true;

		//  Here we'll create 12 of them evenly spaced apart
		for (var i = 0; i < 12; i++)
		{
			//  Create a fly inside of the 'flies' group
			this.fly = this.flies.create(i * 70, 0, 'fly');

			//  Let gravity do its thing
			this.fly.body.gravity.y = 500;

			//  This just gives each star a slightly random bounce value
			this.fly.body.bounce.y = 0.7 + Math.random() * 0.2;
			
			// standing fly
			this.fly.animations.add('still');
			this.fly.animations.play('still', 10, true);

		}
			
		//  The score
		this.scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#FFFFFF' });
			
		// Controls
		this.cursors = this.game.input.keyboard.createCursorKeys();
  
	},
  
  
	update: function() {
		// Collide the player and the flies with the platforms
		/*this.game.physics.arcade.collide(player, platforms);
		this.game.physics.arcade.collide(flies, platforms);

		//  Checks to see if the player overlaps with any of the stars, if he does call the collectflyfunction
		this.game.physics.arcade.overlap(player, flies, collectfly, null, this);

		// Reset the players velocity (movement)
		this.player.body.velocity.x = 0;

		if (this.cursors.left.isDown)
		{
			// Move to the left
			this.player.body.velocity.x = -150;
			this.player.animations.play('left')
		}
		else if (this.cursors.right.isDown)
		{
			// Move to the right
			this.player.body.velocity.x = 150;
			this.player.animations.play('right');
		}
		else
		{
			// Stand still
			this.player.animations.play('still');
		}
		// Allow the player to jump if they are touching the ground.
		if (this.cursors.up.isDown && this.player.body.touching.down)
		{
			this.player.body.velocity.y = -400;
		}*/
	},
	
	
	collectfly: function  (player, fly) {
    
		// Removes the fly from the screen
		this.fly.kill();

		//  Add and update the score
		this.score += 10;
		this.scoreText.text = 'Score: ' + score;

	}
	
};