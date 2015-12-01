$(document).ready(function () {
    //Define vars
   var canvas = $('#canvas')[0];
    var ctx = canvas.getContext("2d");
    var w = canvas.width();
    var h = canvas.height();
    var cw = 15;
    var d = "right";
    var food;
    var score;
    var speed = 130;

    //Snake array
    var snake_array;

    //Initializer
    function init(){
        create_snake();
        create_food();
        score = 0;

        if(typeof game_loop != "undefined") clearInterval(game_loop);
        game_loop = setInterval(paint, speed);
    }

    init(); //Run initializer

    //Snake
    function create_snake(){
        var length = 5;
        snake_array = [];
        for(var i = length-1;i >= 0;i--){
            snake_array.push({x: i,y:0});
        }
    }

    //Create food
    function create_food() {
        food = {
            x:Math.round(Math.random()*(w-cw)/cw),
            y:Math.round(Math.random()*(h-cw)/cw);
        }
    }
});
