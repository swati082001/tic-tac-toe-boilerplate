let boxes=document.querySelectorAll('.box')



click=0
const xIndex=[]
const oIndex=[]

var index=[]

combinations=[
    [1,2,3],[4,5,6],[7,8,9],
    [1,4,7],[2,5,8],[3,6,9],
    [1,5,9],[3,5,7]
]
var count=0
cond=true
function reloadWindow(){
    window.location.reload()
}

function checker(){
    if (click%2!=0){
        for(let i=0;i<combinations.length;i++){
            count=0
            for(let j=0;j<combinations[i].length;j++){
                for(let k=0;k<xIndex.length;k++){
                    if(combinations[i][j]==xIndex[k]){
                        count+=1
                    }
                }
            }
            if (count==3){
                cond=false
                setTimeout(function() { alert("Player X wins"); }, 100);
                setTimeout(function() {reloadWindow()}, 150);
            }
        }
    }else if(click%2==0){
        for(let i=0;i<combinations.length;i++){
            count=0
            for(let j=0;j<combinations[i].length;j++){
                for(let k=0;k<oIndex.length;k++){
                    if(combinations[i][j]==oIndex[k]){
                        count+=1
                    }
                }
            }
            if (count==3){
                cond=false
                setTimeout(function() { alert("Player O wins"); }, 100);
                setTimeout(function() {reloadWindow()}, 150);
            }
        }
    }if(click==9 && cond==true){
        setTimeout(function() { alert("Tie"); }, 100);
        setTimeout(function() {reloadWindow()}, 150);
    }
}
let button=document.getElementById('button')
button.onclick=()=>{
    reloadWindow()
}


function inputSelector(box,click){
    if (click%2!=0){
        box.innerHTML='X'
    }else{
        box.innerHTML='O'
    }
    checker()
}

boxes.forEach(box=>{
    box.onclick=(e)=>{
        let targetId=Number(e.target.id)
        click+=1
        if (click%2!=0){
            if(index.some(function (prevPos) {
                return prevPos==targetId
              })){
                click--
            }else{
                index.push(targetId)
                xIndex.push(targetId)
                inputSelector(box,click)
            }    
        }else{
            if(index.some(function (prevPos) {
                return prevPos==targetId
              })){
                click--
            }else{
                index.push(targetId)
                oIndex.push(targetId)
                inputSelector(box,click)
            }   
        }  
    }
})