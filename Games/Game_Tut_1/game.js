import Paddle from './paddle.js';
import InputHandler from "./input.js";
import Ball from "./ball.js";
import Brick from "./brick.js";

import {BuildLevel,level1,level2} from "./levels.js";



const GameState={
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL: 4
    
};

export default class Game{

    constructor(GameWidth,GameHeight){


        this.GameHeight=GameHeight;
        this.GameWidth=GameWidth;
        this.GameState=GameState.MENU;
        this.paddle=new Paddle(this);
        this.ball= new Ball(this);
        new InputHandler(this.paddle,this);
        this.gameObjects=[];
        this.bricks=[];
        this.Lives=3;
        this.levels=[level1,level2];
        this.currentLevel=0;
        
    }


    start(){
        if(this.GameState!==GameState.MENU && this.GameState!==GameState.NEWLEVEL){
            return;
        }
       
        this.bricks=BuildLevel(this,this.levels[this.currentLevel]);
        this.ball.reset();
    
        this.gameObjects=[this.ball,this.paddle];
        
        this.GameState=GameState.RUNNING;
    }


    update(DeltaTime){
        if(this.Lives===0){
            this.GameState=GameState.GAMEOVER;
        }


        if(this.GameState===GameState.PAUSED 
            || this.GameState===GameState.MENU
            || this.GameState===GameState.GAMEOVER){
            return;
        }

        if(this.bricks.length===0){
           
            this.currentLevel++;
            this.GameState=GameState.NEWLEVEL;
            this.start();
        }
        [...this.gameObjects, ...this.bricks].forEach((object)=> object.update(DeltaTime));
        
        this.bricks=this.bricks.filter(brick=> !brick.MarkedForDeletion);

        
        
    

    }

    draw(context){
        [...this.gameObjects, ...this.bricks].forEach((object)=> object.draw(context));

        if(this.GameState===GameState.PAUSED){
            context.rect(0,0,this.GameWidth,this.GameHeight);
            context.fillStyle="rgba(0,0,0,0.5)";
            context.fill();

            context.font="30px Arial";
            context.fillStyle="white";
            context.textAlign="center";
            context.fillText("Paused",this.GameWidth/2,this.GameHeight/2);
        }



        if(this.GameState===GameState.MENU){
            context.rect(0,0,this.GameWidth,this.GameHeight);
            context.fillStyle="rgba(0,0,0,1)";
            context.fill();

            context.font="30px Arial";
            context.fillStyle="white";
            context.textAlign="center";
            context.fillText("Press SPACEBAR To Start",this.GameWidth/2,this.GameHeight/2);
        }


        if(this.GameState===GameState.GAMEOVER){
            context.rect(0,0,this.GameWidth,this.GameHeight);
            context.fillStyle="rgba(0,0,0,1)";
            context.fill();

            context.font="30px Arial";
            context.fillStyle="white";
            context.textAlign="center";
            context.fillText("GAME OVER",this.GameWidth/2,this.GameHeight/2);
        }
        
        
        
    
    
    
    }

    togglePause(){
        if(this.GameState==GameState.PAUSED){
            this.GameState=GameState.RUNNING;
        }
        else{
            this.GameState=GameState.PAUSED;
        }

    }


}