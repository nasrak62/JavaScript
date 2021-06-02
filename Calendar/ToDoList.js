let MissionsList= localStorage.getItem('missions')? JSON.parse(localStorage.getItem('missions')) : {};
let DayString= localStorage.getItem('DayString');
let TodayMissionsList;
let NumberOfMissions;
let SplitDate=DayString.split('\"');
SplitDate=SplitDate[1];
SplitDate=SplitDate.split('/');
const PresentDate=SplitDate[1]+'/'+SplitDate[0]+'/'+SplitDate[2];
document.querySelector('#TodayDate').innerHTML=PresentDate;
const date=new Date();
const month=date.getMonth();
//MissionsList={};
//localStorage.setItem('missions',JSON.stringify(MissionsList));
if(localStorage.getItem('missions')===null){
    TodayMissionsList= {};
    NumberOfMissions=0;
}
else if(localStorage.getItem('missions')!==null){
    CleanOldDates();
    TodayMissionsList={};
    if(DayString in MissionsList){
        TodayMissionsList=MissionsList[DayString];
    }
    NumberOfMissions=Object.keys(TodayMissionsList).length;
    
}

//Selectors
const ToDoInput=document.querySelector('.ToDoInput');
const ToDoButton=document.querySelector('.ToDoButton');
const ToDoActualList=document.querySelector('.ToDoActualList');
const FilterToDo=document.querySelector('.FilterToDo');
const GoBackToCalendar=document.querySelector('.GoBackToCalendar');

//Event Listeners
ToDoButton.addEventListener('click',AddToDo);
ToDoActualList.addEventListener('click',DeleteCheck);
FilterToDo.addEventListener('click',FilterToDoOption);
GoBackToCalendar.addEventListener('click',()=> window.location.href = "./index.html");

//Functions
function ViewToDo(){
    ToDoActualList.innerHTML='';
    if( Object.keys(TodayMissionsList).length>0){
        for(let f of Object.keys(TodayMissionsList)){
        const ToDoDiv=document.createElement('div');
        ToDoDiv.classList.add("ToDoDiv");
        const ToDoItem=document.createElement('li');
        ToDoItem.innerText=TodayMissionsList[f][0];
        
        ToDoItem.classList.add('ToDoItem');
        ToDoDiv.appendChild(ToDoItem);
        const CheckButton=document.createElement('button');
        CheckButton.classList.add('CheckButton');
        CheckButton.innerHTML='<i class="fas fa-check"></i>';
        ToDoDiv.appendChild(CheckButton);
        const DeleteButton=document.createElement('button');
        DeleteButton.classList.add('DeleteButton');
        DeleteButton.innerHTML='<i class="fas fa-trash"></i>';
        ToDoDiv.appendChild(DeleteButton);
        ToDoActualList.appendChild(ToDoDiv);

        if(TodayMissionsList[f][1]===true){
            ToDoDiv.classList.toggle("completed");
        }
        }
    }
    
}

function CleanOldDates(){
    for(let f of Object.keys(MissionsList)){
        let GetMonth=f.split('\"');
        GetMonth=GetMonth[1];
        GetMonth=GetMonth.split('/');
        GetMonth=GetMonth[0];
        GetMonth=Number(GetMonth);
        console.log(MissionsList);

        if(Math.abs(month-GetMonth)>1){
            delete MissionsList[f]; 
        }
    
    }
}


function UpdateTodayMissionsListAndMissions(){
    let temp={};
    let i=0;
    for(let f of Object.keys(TodayMissionsList)){
        temp[i.toString()]=TodayMissionsList[f];
        i++;
    }
    TodayMissionsList=temp;
    
    temp={};
    MissionsList[DayString]=TodayMissionsList;
    console.log(MissionsList);
    localStorage.setItem('missions',JSON.stringify(MissionsList));
}

function AddToDo(event){
    event.preventDefault();
    if(ToDoInput.value !==''){
        TodayMissionsList[NumberOfMissions.toString()]=[ToDoInput.value,false];
        
        NumberOfMissions++;
        UpdateTodayMissionsListAndMissions();
        ToDoInput.value='';
        ViewToDo();

    }
    else{
        ToDoActualList.innerHTML='';
        const ToDoDiv=document.createElement('div');
        ToDoDiv.classList.add("ToDoDiv");
        const ToDoItem=document.createElement('li');
        ToDoItem.innerText="Insert Text Yo!";
        ToDoItem.classList.add('ToDoItem');
        ToDoDiv.appendChild(ToDoItem);
        ToDoActualList.appendChild(ToDoDiv);
        setTimeout(()=>{
        ViewToDo();
        },3000);
    }
    
} 


function DeleteCheck(e){
    const Item=e.target;
    const ToDo=Item.parentElement;
    const Text=ToDo.querySelector('.ToDoItem').innerText;

    const KeyList=Object.keys(TodayMissionsList);
    let Key=-1;
    for(let f of KeyList){
        if(TodayMissionsList[f][0]===Text){
            Key=f;
        }
    }
    
    

    if(Item.classList[0]==='DeleteButton'){
        if(Key !== -1){
            ToDo.classList.add("fall");
            delete TodayMissionsList[Key];  
            UpdateTodayMissionsListAndMissions();
            
        }
        ToDo.addEventListener('transitionend',function(){
            ToDo.remove();
            ViewToDo(); 
        });

        
        
        
        
    }


    else if(Item.classList[0]==='CheckButton'){
        ToDo.classList.toggle("completed");
        if(Key !== -1){
            TodayMissionsList[Key][2]=!TodayMissionsList[Key][2];
        }
    }

}

function FilterToDoOption(e){
    const ToDos=ToDoActualList.childNodes;
    ToDos.forEach(function(Todo){
        switch(e.target.value){
            case "all":
                Todo.style.display='flex';
                break;
            case "completed":
                if(Todo.classList.contains("completed")){
                    Todo.style.display='flex';
                }
                else {
                    Todo.style.display='none';
                }
                break;
            case "uncompleted":
                if(Todo.classList.contains("completed")){
                    Todo.style.display='none';
                }
                else {
                    Todo.style.display='flex';
                }
                break;

        }
    });
}

ViewToDo();
