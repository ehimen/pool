export default class Direction
{
	
	constructor(degrees)
	{
		degrees = (typeof degrees === 'number') && degrees || 0;
		this.degrees = degrees % 360;
	}
	
	cos()
	{
		return Math.cos(this.radians);
	}
	
	sin()
	{
		return Math.sin(this.radians);
	}
	
	invert()
	{
		return new Direction(this.degrees - 180);
	}
	
	reflect(direction)
	{
		return new Direction(this.degrees + (this.degrees % direction.degrees));
	}
	
	get radians()
	{
		return this.degrees * Math.PI / 180;
	}
	
}