document.addEventListener('DOMContentLoaded',()=>{


    //card options
    const CardArray=[
        {
        name:'p1',
        img: 'images/p1.png'
        },

        {
        name:'p2',
        img: 'images/p2.png'
        },

        {
        name:'p3',
        img: 'images/p3.png'
        },

        {
        name:'p4',
        img: 'images/p4.png'
        },

        {
        name:'p5',
        img: 'images/p5.png'
        },

        {
        name:'p6',
        img: 'images/p6.png'
        },

        {
            name:'p1',
            img: 'images/p1.png'
            },
    
            {
            name:'p2',
            img: 'images/p2.png'
            },
    
            {
            name:'p3',
            img: 'images/p3.png'
            },
    
            {
            name:'p4',
            img: 'images/p4.png'
            },
    
            {
            name:'p5',
            img: 'images/p5.png'
            },
    
            {
            name:'p6',
            img: 'images/p6.png'
            }
    
    
    
    
    ];

    CardArray.sort(()=>0.5-Math.random());
    const ResultDisplay=document.querySelector('#result')

    const grid= document.querySelector('.grid');
    let CardsChosen=[];
    let CardsChosenId=[];
    let CardsWon=[];
    //create board

    function CreateBoard(){
        for(let i=0; i<CardArray.length;i++){
            let Card=document.createElement('img');
            Card.setAttribute('src','images/p7.png');
            Card.setAttribute('width',200);
            Card.setAttribute('height',200);
            Card.setAttribute('data-id',i);
            Card.addEventListener('click', FlipCard);

            grid.appendChild(Card);
        }

    }

    //check for matches
        function CheckForMatch(){
            let Cards=document.querySelectorAll('img');
            if(CardsChosen[0]===CardsChosen[1]){
                Cards[CardsChosenId[0]].style.display='none';
                Cards[CardsChosenId[1]].style.display='none';
                CardsWon.push(CardsChosen);
            }
            else{
                Cards[CardsChosenId[0]].setAttribute('src','images/p7.png');
                Cards[CardsChosenId[1]].setAttribute('src','images/p7.png');
                
            }
            CardsChosen=[];
            CardsChosenId=[];
            ResultDisplay.textContent=CardsWon.length;
            if(CardsWon.length===CardArray.length/2){
                alert('Winner!')
            }

        }
        

    //flip your card
        function FlipCard(){
            let CardId=this.getAttribute('data-id');
            CardsChosen.push(CardArray[CardId].name);
            CardsChosenId.push(CardId);
            this.setAttribute('src',CardArray[CardId].img);
            if(CardsChosen.length===2){
                setTimeout(CheckForMatch,800);
            }


        }

    CreateBoard();

});