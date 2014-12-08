var FrogAdventures = FrogAdventures || {};

FrogAdventures.level1 = function(){


};

FrogAdventures.level1.prototype = {
	
	create: function() {
	
		this.score = 0;
		this.a = 0;
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
		this.ledge = this.platforms.create(400, 400, 'platform');
		this.ledge.body.immovable = true;

		this.ledge = this.platforms.create(-150, 250, 'platform');
		this.ledge.body.immovable = true;
		
		// Next level door and it's settings
		this.door = this.game.add.sprite(this.world.width - 75, this.game.world.height - 180, 'door');
		this.door.animations.add('closed', [0], 10);
		this.game.physics.arcade.enable(this.door);
		
		
		// Player it's settings
		this.player = this.game.add.sprite(38, this.game.world.height - 150, 'frog');

		// Enabling physics on the player
		this.game.physics.arcade.enable(this.player);

		// Player physics properties
		this.player.body.bounce.y = 0.1;
		this.player.body.gravity.y = 300;
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
		for (var i = 0; i < 11; i++)
		{
			// Create a fly inside of the 'flies' group
			this.fly = this.flies.create(i * 70, 0, 'fly');
			// Let gravity do its thing
			this.fly.body.gravity.y = 300;
			// Standing fly
			this.fly.animations.add('still');
			this.fly.animations.play('still', 10, true);
		}
		this.fly = this.flies.create(420, 400, 'fly');
		this.fly.body.gravity.y = 300;
		this.fly.animations.add('still');
		this.fly.animations.play('still', 10, true);
		
		this.fly = this.flies.create(490, 400, 'fly');
		this.fly.body.gravity.y = 300;
		this.fly.animations.add('still');
		this.fly.animations.play('still', 10, true);

		
		this.fly = this.flies.create(560, 400, 'fly');
		this.fly.body.gravity.y = 300;
		this.fly.animations.add('still');
		this.fly.animations.play('still', 10, true);
		
		this.fly = this.flies.create(630, 400, 'fly');
		this.fly.body.gravity.y = 300;
		this.fly.animations.add('still');
		this.fly.animations.play('still', 10, true);
		
		// The score
		this.scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#FFFFFF' });
			
		// Controls
		this.cursors = this.game.input.keyboard.createCursorKeys();
		  
	},
  
	update: function() {
	
		// Collide the player, the flies and the door with the platforms
		this.game.physics.arcade.collide(this.player, this.platforms);
		this.game.physics.arcade.collide(this.flies, this.platforms);
		this.game.physics.arcade.collide(this.door, this.platforms);

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
		this.scoreText.text = 'Score: ' + this.score;
		
		// Checks if the fly is the last one if so, opens the door	
		if (this.a == 15)
		{
			this.door.animations.add('open', [1, 2, 3, 4], 10, true);
			this.door.play('open');
		}
		
		else
		{
			this.door.play('closed');
		}

	},
	
	nextlevel: function (player, door) {
	
		// If the door is open, starts a new level
		if (this.score == 150)
		{
			this.state.start('level2');
		}

	}
	
};