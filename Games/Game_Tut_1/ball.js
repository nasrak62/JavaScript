import {DetectCollision} from "./collisionDetection.js";


export default class Ball{

    constructor(game){
        /////images
        this.image=document.getElementById('ImgBall');
        this.game=game;
        

        this.size=16;

        this.GameHeight=game.GameHeight;
        this.GameWidth=game.GameWidth;
        this.reset();
    }


    reset(){
        this.position={
            x:10,
            y:400

        };

        this.Speed={
            x: 4,
            y: -2
        };

    }

    draw(context){

        context.drawImage(this.image,this.position.x,
            this.position.y,this.size,this.size);
    }


    update(deltaTime){

        this.position.x+=this.Speed.x;

        this.position.y+=this.Speed.y;

        //collide with left or right walls

        if(this.position.x+this.size> this.GameWidth || this.position.x<0){
            this.Speed.x=-this.Speed.x;
        }

        // collide with top 
        if(this.position.y<0){
            this.Speed.y=-this.Speed.y;
            this.position.y=0;
        }

        //collide with bottom
        if(this.position.y+this.size> this.GameHeight ){
            this.game.Lives--;
            this.reset();
        }

        //check collision with paddle

       
        if(DetectCollision(this,this.game.paddle) ){
            this.Speed.y= - this.Speed.y;
            this.position.y=this.game.paddle.position.y - this.size;
        }



    }



}