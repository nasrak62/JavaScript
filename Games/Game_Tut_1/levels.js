import Brick from "./Brick.js";

export function BuildLevel(game,level){
    let bricks=[];
    level.forEach((row,rowIndex)=>{
        row.forEach((brick,brickIndex)=>{
            if(brick===1){
                let position={
                    x:80*brickIndex,
                    y:75+24*rowIndex
                };
                bricks.push(new Brick(game,position));
            }



        });



    });

    return bricks;

}



export const level1=[

    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [0,1,0,1,0,1,0,1,0,1]

];


export const level2=[

    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [0,1,0,1,0,1,0,1,0,1]

];