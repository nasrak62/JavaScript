export default class Paddle{

    constructor(game){
        this.width=150;
        this.height=20;
        this.GameHeight=game.GameHeight;
        this.GameWidth=game.GameWidth;


        this.MaxSpeedX=7;
        this.SpeedX=0;
        this.MaxSpeedY=7;
        this.SpeedY=0;
        

        this.position={
            x:game.GameWidth/2 - this.width/2,
            y:game.GameHeight-this.height-10
        }
        

    }

    MoveLeft(){
        this.SpeedX=-this.MaxSpeedX;
        
    }

    MoveRight(){
        this.SpeedX= this.MaxSpeedX;
       
    }

    MoveUp(){
        this.SpeedY=-this.MaxSpeedY;
        
    }

    MoveDown(){
        this.SpeedY= this.MaxSpeedY;
        
    }


    FastMoveLeft(){
        this.SpeedX=-this.MaxSpeedX;
        this.position.x+=-0.2* this.GameWidth;
    }

    FastMoveRight(){
        this.SpeedX= this.MaxSpeedX;
        this.position.x+=0.2* this.GameWidth;
    }

    FastMoveUp(){
        this.SpeedY=-this.MaxSpeedY;
        this.position.y+=-0.1* this.GameHeight;
        
    }

    FastMoveDown(){
        this.SpeedY= this.MaxSpeedY;
        this.position.y+=0.1* this.GameHeight;
        
    }

    StopX(){
        this.SpeedX=0;
    }
    StopY(){
        this.SpeedY=0;
    }


    draw(context){
        context.fillStyle = "#0ff";
        context.fillRect(this.position.x,this.position.y
            ,this.width,this.height);
           
    }

    update(DeltaTime){
        


        this.position.y+=this.SpeedY;
        this.position.x+=this.SpeedX;
       
        

        if(this.position.x<0){
            this.position.x=0; 
        }
        if(this.position.x>(this.GameWidth-this.width)){
            this.position.x=(this.GameWidth-this.width); 
        }

        if(this.position.y<0){
            this.position.y=0; 
        }
        if(this.position.y>(this.GameHeight-this.height)){
            this.position.y=(this.GameHeight-this.height); 
        }


    }

}

