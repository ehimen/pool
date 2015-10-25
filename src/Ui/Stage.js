import Position from 'Pool/Position.js';
import PIXI from 'PIXI';

/**
 * Decorates a PIXI container and renderer, providing useful methods.
 */
export default class Stage
{
	
	constructor(container, renderer)
	{
		this.container = container;
		this.renderer  = renderer;
	}
	
	render()
	{
		this.renderer.render(this.container);
	}
	
	clear()
	{
		this.container.removeChildren();
	}
	
	getDomElement()
	{
		return this.renderer.view;
	}
	
	getContainer()
	{
		return this.container;
	}
	
	getCenter()
	{
		return new Position(
			this.renderer.width / 2,
			this.renderer.height / 2
		);
	}
	
}

Stage.withColor = ((color, renderer) => {
	renderer = renderer || PIXI.autoDetectRenderer(null, null, {antialias: true});
	renderer.backgroundColor = color;
	return new Stage(new PIXI.Container(color), renderer)
});