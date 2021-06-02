export function DetectCollision(ball,gameObject){


     //check collision with paddle
     let BallTop=ball.position.y ;


     let BallBottom=ball.position.y + ball.size;

     let objectTop=gameObject.position.y;

     let objectLeft=gameObject.position.x;

     let objectRight=gameObject.position.x+ gameObject.width;

     let objectBottom=gameObject.position.y + gameObject.height;

     if(BallBottom>= objectTop
         && BallTop<= objectBottom
         && ball.position.x>= objectLeft
         && ball.position.x+ball.size<= objectRight
         
         ){
         return true;
     }
     else{
         return false;
     }
}