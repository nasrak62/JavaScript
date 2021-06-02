import Game from "./game.js";

export default class InputHandler{


    constructor(paddle,game){
        this.PreviousKeyCode=0;
        this.KeyLastUp=new Date();
        this.KeyLastDown=new Date();
        this.NumberOfPress={
            'left':0,
            'right':0,
            'up':0,
            'down':0
        };
        document.addEventListener('keydown',(event)=>{
            const n=new Date();
        switch(event.keyCode){
          
            case 37:
                //move left
                if (this.PreviousKeyCode===event.keyCode 
                    && n-this.KeyLastDown<300 && this.KeyLastUp>this.KeyLastDown ){
                    paddle.FastMoveLeft();
                }
                else{
                    paddle.MoveLeft();
                }
                

                this.PreviousKeyCode=event.keyCode;
                break;
            case 38:
                //move up
                if (this.PreviousKeyCode===event.keyCode 
                    && n-this.KeyLastDown<300 && this.KeyLastUp>this.KeyLastDown ){
                    
                    paddle.FastMoveUp();
                }
                else{
                    paddle.MoveUp();
                }

                this.PreviousKeyCode=event.keyCode;
                
                break;
            case 39:
                //move right
                if (this.PreviousKeyCode===event.keyCode 
                    && n-this.KeyLastDown<300 && this.KeyLastUp>this.KeyLastDown ){
                    
                    paddle.FastMoveRight();
                }
                else{
                    paddle.MoveRight();
                }

                this.PreviousKeyCode=event.keyCode;
                
                break;
            case 40:
                //move down
                if (this.PreviousKeyCode===event.keyCode 
                    && n-this.KeyLastDown<300 && this.KeyLastUp>this.KeyLastDown ){
                   
                    paddle.FastMoveDown();
                }
                else{
                    paddle.MoveDown();
                }

                this.PreviousKeyCode=event.keyCode;
                
                break;
            case 27:
                //esc
                game.togglePause();
                
                break;
            case 32:
                //space
                game.start();
                
                break;
        }
        this.KeyLastDown=n;        
        });


        document.addEventListener('keyup',(event)=>{
            const n=new Date();
        switch(event.keyCode){
            
            case 37:
                //move left
                setTimeout(()=>{
                    if (paddle.SpeedX<0 && (this.PreviousKeyCode!==event.keyCode || this.KeyLastDown<n) ){
                        paddle.StopX();
                        this.PreviousKeyCode=0;
                    }
                },150); 
                break;
            case 38:
                //move up
                setTimeout(()=>{
                    if (paddle.SpeedY<0 && (this.PreviousKeyCode!==event.keyCode || this.KeyLastDown<n) ){
                        paddle.StopY();
                        this.PreviousKeyCode=0;
                    }
                },150);
                
                break;
            case 39:
                //move right
                setTimeout(()=>{
                    if (paddle.SpeedX>0 && (this.PreviousKeyCode!==event.keyCode || this.KeyLastDown<n) ){
                        paddle.StopX();
                        this.PreviousKeyCode=0;
                    }
                },150);
                
                break;
            case 40:
                //move down
                setTimeout(()=>{
                    if (paddle.SpeedY>0 && (this.PreviousKeyCode!==event.keyCode || this.KeyLastDown<n) ){
                        paddle.StopY();
                        this.PreviousKeyCode=0;
                    }
                },150);
                
                break;
        }  
        this.KeyLastUp=n;      
        });

        

    }
}