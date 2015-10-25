/**
 * Maps game world coordinate to a display.
 */
export default class CoordinateConverter
{
	
	constructor(pixelsPerMeter)
	{
		this.pixelsPerMeter = pixelsPerMeter;
	}
	
	
	scale(value)
	{
		return value * this.pixelsPerMeter;
	}
	
	
	toPixels(position)
	{
		return position.scale(this.pixelsPerMeter);
	}
	
}