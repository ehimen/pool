import Engine from 'Controller/Engine.js';
import Game from 'Pool/Game.js';
import Table from 'Pool/Table.js';
import Player from 'Pool/Player.js';
import Position from 'Pool/Position.js';
import TableRenderer from 'Ui/TableRenderer.js';
import BallRenderer from 'Ui/BallRenderer.js';
import Stage from 'Ui/Stage.js';
import CoordinateConverter from 'Ui/CoordinateConverter.js';
import PIXI from 'PIXI';

var stage = Stage.withColor(0xdfdfff);
var coordinateConverter = new CoordinateConverter(210);

// add the renderer view element to the DOM
document.body.appendChild(stage.getDomElement());

// TODO: bootstrap helper!
var players = [
	new Player('ehimen')
];
var table = new Table(2.7);
var game = new Game(players, table);
var tableRenderer = new TableRenderer(
	stage,
	new BallRenderer(coordinateConverter),
	coordinateConverter
);

(new Engine(stage, tableRenderer, game)).start();

// TODO: test interval changing coordinate converter scale.