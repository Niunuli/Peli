var FrogAdventures = FrogAdventures || {};

FrogAdventures.level3 = function(){};

FrogAdventures.level3.prototype = {

	init: function(score) {
	
		this.score = score;
	},
	
	create: function() {
	
		this.a = 0;

		// Create background
		this.game.add.sprite(0, 0, 'background');

		// Create background
		this.game.add.sprite(0, 0, 'background');
		
		// Contains ground and ledges, enabling physics to the group
		this.platforms = this.game.add.group();
		this.platforms.enableBody = true;

		// Create the ground
		this.ground = this.platforms.create(0, this.game.world.height - 64, 'ground');

		// Scale it to fit the width of the game
		this.ground.scale.setTo(1, 1);

		// Stops it from falling when you jump on it
		this.ground.body.immovable = true;

		// Create two ledges
		this.ledge = this.platforms.create(-100, 450, 'platform');
		this.ledge.body.immovable = true;

		this.ledge = this.platforms.create(140, 370, 'platform');
		this.ledge.body.immovable = true;
		
		this.ledge = this.platforms.create(50, 250, 'platform');
		this.ledge.body.immovable = true;

		this.ledge = this.platforms.create(240, 150, 'platform');
		this.ledge.body.immovable = true;
		
		this.ledge = this.platforms.create(-80, 150, 'platform');
		this.ledge.body.immovable = true;

		this.ledge = this.platforms.create(430, 350, 'platform');
		this.ledge.body.immovable = true;

		this.ledge = this.platforms.create(520, 200, 'platform');
		this.ledge.body.immovable = true;
		
		this.ledge = this.platforms.create(510, 50, 'platform');
		this.ledge.body.immovable = true;

		// Next level door and it's settings
		this.door = this.game.add.sprite(this.world.width - 75, this.game.world.height - 180, 'door');
		this.door.animations.add('closed', [0], 10);
		this.game.physics.arcade.enable(this.door);
		
		// Player and it's settings
		this.player = this.game.add.sprite(38, this.game.world.height - 150, 'frog');

		// Enabling physics on the player
		this.game.physics.arcade.enable(this.player);

		// Player physics properties
		this.player.body.bounce.y = 0.1;
		this.player.body.gravity.y = 700;
		this.player.body.collideWorldBounds = true;

		// Breathing player
		this.player.animations.add('still', [0, 1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 7, 7, 7, 7], 10, true);

		// Moving left and right
		this.player.animations.add('left', [8, 9, 10, 11, 12, 13, 14, 15], 10, true);
		this.player.animations.add('right', [16, 17, 18, 19, 20, 21, 22, 23], 10, true);
		
		// Some flies to collect
		this.flies = this.game.add.group();
		// We will enable physics for any fly that is created in this group
		this.flies.enableBody = true;
		// Here we'll create 11 of them evenly spaced apart
		for (var i = 0; i < 12; i++)
		{
			// Create a fly inside of the 'flies' group
			this.fly = this.flies.create(i * 70, 0, 'fly');
			// Let gravity do its thing
			this.fly.body.gravity.y = 300;
			// Standing fly
			this.fly.animations.add('still');
			this.fly.animations.play('still', 10, true);

		}
		for (var i = 0; i < 10; i++)
		{
			// Create a fly inside of the 'flies' group
			this.fly = this.flies.create(i * 80, 160, 'fly');
			// Let gravity do its thing
			this.fly.body.gravity.y = 300;
			// Standing fly
			this.fly.animations.add('still');
			this.fly.animations.play('still', 10, true);

		}
		for (var i = 0; i < 12; i++)
		{
			// Create a fly inside of the 'flies' group
			this.fly = this.flies.create(i * 60, 260, 'fly');
			// Let gravity do its thing
			this.fly.body.gravity.y = 300;
			// Standing fly
			this.fly.animations.add('still');
			this.fly.animations.play('still', 10, true);

		}
		
		// Group for snakes
		this.snakes = this.game.add.group();
		// Enabling physics for any snake that is created in this group
		this.snakes.enableBody = true;
		// Create one snake
		this.snake = this.snakes.create(this.world.width - 310, this.game.world.height - 520, 'snake');
		// Animation for the snakes
		this.snake.animations.add('move', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
		this.snake.animations.play('move', 10, true);

		this.snake = this.snakes.create(this.world.width - 610, this.game.world.height - 200, 'snake');
		this.snake.animations.add('move', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
		this.snake.animations.play('move', 10, true);

		this.snake = this.snakes.create(this.world.width - 680, this.game.world.height - 320, 'snake');
		this.snake.animations.add('move', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
		this.snake.animations.play('move', 10, true);

		// The score
		this.scoreText = this.game.add.text(16, 16, 'score: ' + this.score, { fontSize: '32px', fill: '#FFFFFF' });			

		// Controls
		this.cursors = this.game.input.keyboard.createCursorKeys();
		  
	},
  
	update: function() {
	
		// Collide the player, the flies and the door with the platforms
		this.game.physics.arcade.collide(this.player, this.platforms);
		this.game.physics.arcade.collide(this.flies, this.platforms);
		this.game.physics.arcade.collide(this.door, this.platforms);

		// Check to see if the player overlaps with any of the snakes, if he does call the gameover function
		this.game.physics.arcade.overlap(this.player, this.snakes, this.gameover, null, this);
		
		// Checks to see if the player overlaps with any of the flies, if he does call the collectfly function
		this.game.physics.arcade.overlap(this.player, this.flies, this.collectfly, null, this);

		// Checks to see if the player overlaps with the door, if he does call the nextlevel function
		this.game.physics.arcade.overlap(this.door, this.player, this.nextlevel, null, this);

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
		}
		
	},
	
	collectfly: function  (player, fly) {
	
		// Removes the fly from the screen
		fly.kill();
		this.a++;

		// Add and update the score
		this.score += 10;
		this.scoreText.text = 'score: ' + this.score;
		
		// Checks if the fly is the last one if so, opens the door	
		if (this.a == 34)
		{
			this.door.animations.add('open', [1, 2, 3, 4], 10, true);
			this.door.play('open');
		}		
		else
		{
			this.door.play('closed');
		}

	},
	
	gameover: function (player, snake) {
		if (snake.animations.currentAnim.frame >= 4 && snake.animations.currentAnim.frame <= 12)
		{
			this.state.start('gameover', true, false, this.score);
		}
	},
	
	nextlevel: function (player, door) {
	
		// If the door is open, starts a new level
		if (this.a == 34)
		{
			this.state.start('gamefinished', true, false, this.score);
		}

	}
	
};