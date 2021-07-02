var database;
var form;
var gameState = 0;
var game;
var player;
var playerCount;


function setup() {
  database = firebase.database();
  console.log(database);

  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background("white");


  drawSprites();

}