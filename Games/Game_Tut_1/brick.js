import {DetectCollision} from "./collisionDetection.js";
export default class Brick{

    constructor(game,position){
        /////images
        this.image=document.getElementById('ImgBrick');
        this.game=game;
        this.position=position;


        this.width=80;
        this.height=24;

        this.GameHeight=game.GameHeight;
        this.GameWidth=game.GameWidth;

        this.MarkedForDeletion=false;
    }


    update(){
        if(DetectCollision(this.game.ball,this)){
            this.game.ball.Speed.y=-this.game.ball.Speed.y;
            this.MarkedForDeletion=true;
        }
    
    
    
    
    }


    draw(context){
        context.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height




        );

    }


}