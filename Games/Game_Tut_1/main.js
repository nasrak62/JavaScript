import Game from './game.js'
let canvas=document.querySelector('#GameScreen');
let context= canvas.getContext('2d');

const GameWidth=800;
const GameHeight=600;





canvas.width = GameWidth;
canvas.height = GameHeight;



let game=new Game(GameWidth,GameHeight);


context.clearRect(0,0,GameWidth,GameHeight);


let LastTime=0;

function GameLoop(TimeStamp){
    let DeltaTime=TimeStamp-LastTime;
    LastTime=TimeStamp;



    context.clearRect(0,0,GameWidth,GameHeight);

    game.update(DeltaTime);
    game.draw(context);
    
    
    requestAnimationFrame(GameLoop);
}

requestAnimationFrame(GameLoop);