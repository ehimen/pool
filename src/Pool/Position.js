export default class Position
{
	
	constructor(x, y)
	{
		if (typeof x !== 'number' || isNaN(x)) {
			throw new Error('Position (x) requires a number, got ' + x);
		}
		if (typeof y !== 'number' || isNaN(y)) {
			throw new Error('Position (y) requires a number, got ' + y);
		}
		
		this.x = x;
		this.y = y;
	}
	
	getX()
	{
		return this.x;
	}
	
	getY()
	{
		return this.y;
	}
	
	scale(scale)
	{
		return new Position(
			this.x * scale,
			this.y * scale
		);
	}
	
	shift(direction, amount)
	{
		return new Position(
			this.x + (direction.cos() * amount),
			this.y + (direction.sin() * amount)
		);
	}
	
	isWithin(amount, position)
	{
		return (((position.getX() - this.x) < amount) && ((position.getY() - this.y) < amount));
	}
	
}