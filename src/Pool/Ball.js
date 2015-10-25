import Direction from 'Pool/Direction.js';

export default class Ball
{
	
	constructor(color, position)
	{
		this.color        = color;
		this.position     = position;
		this.acceleration = 0.01;
		this.direction    = new Direction(Math.random() * 360);
	}
	
	getColor()
	{
		return this.color;
	}
	
	getPosition()
	{
		return this.position;
	}
	
	move()
	{
		this.position = this.position.shift(this.direction, this.acceleration);
		this.acceleration -= Ball.ACCELERATION_DECAY;
		this.acceleration = (this.acceleration < 0) ? 0 : this.acceleration;
	}

	/**
	 * 
	 * @param {Ball} ball
	 */
	ballCollisionCheck(ball)
	{
		if (ball === this) {
			return;
		}
		
		if (ball.getPosition().isWithin(Ball.DIAMETER, this.getPosition())) {
			var totalAcceleration = this.acceleration + ball.acceleration;
			ball.acceleration = totalAcceleration / 2;
			ball.direction = ball.direction.invert();
			this.acceleration = totalAcceleration / 2;
			this.direction = this.direction.invert();
		}
	}

	/**
	 * 
	 * @param {Table} table
	 */
	cushionCollisionCheck(table)
	{
		var boundaryLeft = Ball.DIAMETER;
		var boundaryTop  = Ball.DIAMETER;
		var boundaryRight = Ball.DIAMETER + table.getLength();
		var boundaryBottom = Ball.DIAMETER + table.getWidth();

		if (this.getPosition().getX() < boundaryLeft) {
			// Collided with left wall.
			this.direction = this.direction.reflect(new Direction(90));
			
		} else if (this.getPosition().getY() < boundaryTop) {
			// Collided with top cushion.
			this.direction = this.direction.reflect(new Direction(180));
			
		} else if (this.getPosition().getX() > boundaryRight) {
			// Collided with right cushion.
			this.direction = this.direction.reflect(new Direction(90));
			
		} else if (this.getPosition().getY() > boundaryBottom) {
			// Collided with bottom cushion.
			this.direction = this.direction.reflect(new Direction(180));
		}
	}
	
}

Ball.ACCELERATION_DECAY = 0.000;


Ball.DIAMETER = 0.10;

Ball.COLOR_RED    = 'red';
Ball.COLOR_YELLOW = 'yellow';
Ball.COLOR_BLACK  = 'black';
Ball.COLOR_WHITE  = 'white';

