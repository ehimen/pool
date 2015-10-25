import Ball from 'Pool/Ball.js';

export default class Engine
{
	constructor(stage, tableRenderer, game)
	{
		this.stage         = stage;
		this.tableRenderer = tableRenderer;
		this.game          = game;
	}
	
	start()
	{
		this.tick();
		
		setInterval(() => {
			this.game.getTable().getBalls().forEach((ball) => {
				ball.move();
				//this.game.getTable().getBalls().forEach((otherBall) => {
				//	// TODO: only need to check balls not already checked with this one.
				//	ball.ballCollisionCheck(otherBall);
				//});
				var before = ball.direction.degrees;
				ball.cushionCollisionCheck(this.game.getTable());
				var after = ball.direction.degrees;
				
				if (before !== after) {
					console.log('Before collision check');
					console.log(before);
					console.log('After collision check');
					console.log(after);
					console.log('');
				}
			});
		}, 50);
	}
	
	tick()
	{
		// Wrap this in a closure to ensure 'this' context is correct.
		requestAnimationFrame((() => {
			this.tick();
		}));
		this.renderScene();
	}
	
	renderScene()
	{
		this.stage.clear();
		this.stage.getContainer().addChild(this.tableRenderer.render(this.game.getTable()));
		this.stage.render();
	}
}