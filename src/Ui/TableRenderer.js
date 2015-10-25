import PIXI from 'PIXI';

export default class TableRenderer
{
	
	constructor(stage, ballRenderer, coordinateConverter)
	{
		this.stage = stage;
		this.ballRenderer = ballRenderer;
		this.coordinateConverter = coordinateConverter;
	}
	
	
	render(table)
	{
		var graphics = new PIXI.Graphics();
		
		var center = this.stage.getCenter();
		
		var length = this.coordinateConverter.scale(table.getLength());
		var width = this.coordinateConverter.scale(table.getWidth());
		var tableTrimSize = this.coordinateConverter.scale(TableRenderer.WIDTH_TABLE_TRIM);
		var tableOffsetX = center.getX() - (length / 2);
		var tableOffsetY = center.getY() - (width / 2);
		
		graphics.beginFill(TableRenderer.COLOR_TABLE_CLOTH);

		// set the line style to have a width of 5 and set the color to red
		graphics.lineStyle(tableTrimSize, TableRenderer.COLOR_TABLE_MATERIAL);

		// draw a rectangle
		graphics.drawRect(tableOffsetX, tableOffsetY, length, width);
		
		table.getBalls().forEach((ball) => {
			var ballGraphics = this.ballRenderer.render(ball);
			ballGraphics.x += tableOffsetX + tableTrimSize;
			ballGraphics.y += tableOffsetY + tableTrimSize;
			graphics.addChild(ballGraphics);
		});
		
		return graphics;
	}
	
}

TableRenderer.COLOR_TABLE_MATERIAL = 0x663300;
TableRenderer.COLOR_TABLE_CLOTH    = 0x009900;
TableRenderer.WIDTH_TABLE_TRIM     = 0.075;
