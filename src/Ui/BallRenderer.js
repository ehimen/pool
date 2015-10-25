import Ball from 'Pool/Ball.js';
import PIXI from 'PIXI';

export default class BallRenderer
{
	
	constructor(coordinateConverter)
	{
		this.coordinateConverter = coordinateConverter;
	}

	/**
	 * 
	 * @param {Ball} ball
	 */
	render(ball)
	{
		var color = BallRenderer.colors[ball.getColor()];
		
		var radius = this.coordinateConverter.scale(Ball.DIAMETER / 2);
		var position = this.coordinateConverter.toPixels(ball.getPosition());
		
		var graphics = new PIXI.Graphics();
		
		graphics.beginFill(color);
		graphics.drawCircle(position.getX(), position.getY(), radius);
		graphics.endFill();
		
		return graphics;
	}
	
}

BallRenderer.colors = {};
BallRenderer.colors[Ball.COLOR_BLACK]  = 0x000000;
BallRenderer.colors[Ball.COLOR_WHITE]  = 0xffffff;
BallRenderer.colors[Ball.COLOR_RED]    = 0xff0000;
BallRenderer.colors[Ball.COLOR_YELLOW] = 0xffff00;