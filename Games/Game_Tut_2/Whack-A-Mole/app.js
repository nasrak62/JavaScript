const Squares=document.querySelectorAll('.square');
const Mole=document.querySelectorAll('.mole');
const TimeLeft= document.querySelector('#TimeLeft');

let Score= document.querySelector('#Score');

let result=0;
let CurrentTime=TimeLeft.textContent;
let  HitPosition;

function RandomSquare(){
    Squares.forEach((className)=>{
        className.classList.remove('mole');
    });
    let RandomPosition=Squares[Math.floor(Math.random()*9)];
    RandomPosition.classList.add('mole');

    HitPosition=RandomPosition.id;

}

Squares.forEach((Square)=>{
    Square.addEventListener('mouseup',()=>{
        if(Square.id=== HitPosition){
            result=result+1;
            Score.textContent=result;
           
        }
    });
});


function MoveMole(){
    let TimerId=null;
    TimerId=setInterval(RandomSquare,1000);
}


function CountDown(){
    CurrentTime--;
    TimeLeft.textContent=CurrentTime;
    
    if(CurrentTime===0){
        clearInterval(TimerId);
        alert('Game Over!\nScore is: '+result);
    }
}

MoveMole();
let TimerId=setInterval(CountDown,1000);

