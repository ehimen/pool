import Ball from 'Pool/Ball.js';
import Position from 'Pool/Position.js';

export default class Table
{
	
	constructor(size)
	{
		// TODO: factory?
		this.balls = [
			new Ball(Ball.COLOR_RED, new Position(1.3, 0.6)),
			//new Ball(Ball.COLOR_RED, new Position(1.3, 0.6)),
			//new Ball(Ball.COLOR_RED, new Position(1.3, 0.6)),
			//new Ball(Ball.COLOR_RED, new Position(1.3, 0.6)),
			//new Ball(Ball.COLOR_RED, new Position(1.3, 0.6)),
			//new Ball(Ball.COLOR_RED, new Position(1.3, 0.6)),
			//new Ball(Ball.COLOR_RED, new Position(1.3, 0.6)),
			//new Ball(Ball.COLOR_YELLOW, new Position(1.3, 0.6)),
			//new Ball(Ball.COLOR_YELLOW, new Position(1.3, 0.6)),
			//new Ball(Ball.COLOR_YELLOW, new Position(1.3, 0.6)),
			//new Ball(Ball.COLOR_YELLOW, new Position(1.3, 0.6)),
			//new Ball(Ball.COLOR_YELLOW, new Position(1.3, 0.6)),
			//new Ball(Ball.COLOR_YELLOW, new Position(1.3, 0.6)),
			//new Ball(Ball.COLOR_YELLOW, new Position(1.3, 0.6)),
			//new Ball(Ball.COLOR_BLACK, new Position(1.3, 0.6)),
			//new Ball(Ball.COLOR_WHITE, new Position(1.3, 0.6))
		];
		
		this.length = size;
		this.width  = size / 2;
	}
	
	getLength()
	{
		return this.length;
	}
	
	getWidth()
	{
		return this.width;
	}
	
	getBalls()
	{
		return this.balls;
	}
	
}