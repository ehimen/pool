import Ball from 'Pool/Ball.js';

export default class Game
{
	
	constructor(players, table)
	{
		this.players = players;
		this.table   = table;
	}
	
	getTable()
	{
		return this.table;
	}
	
}