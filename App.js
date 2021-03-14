const dino=document.querySelector('.dino')
const grid=document.querySelector('.grid');
let isJumping=false;
let gravity=0.9;


const control=(e)=>{

     if(e.keyCode===32){
         if(!isJumping){
 isJumping=true;
 jumpingFunction();
         }  

     }
}
document.addEventListener('keyup',control);

let position =0;

function jumpingFunction(){

    let count=0;

    const timerId=setInterval(function(){

       if(count===15){
           clearInterval(timerId);

           ///dino down

          const downInterval=setInterval(function(){
  
            if(count===0) {
                clearInterval(downInterval)
                isJumping=false;
            }
            position-=5;
            count--;
            position*=gravity;
            dino.style.bottom=position+'px';
          },20)
       }
         
        ///dino up
        console.log('up')
        position+=30;
        count++;
        position*=gravity;
        dino.style.bottom=position+'px';

    },20)

    
}

////adding obstacle 

function generateObstacle(){

     let obstaclePosition=1000;
    const obstacle=document.createElement('div');
    obstacle.classList.add('obstacle');
    
    // adding into grid 
    grid.appendChild(obstacle);
    obstacle.style.left=obstaclePosition + 'px';



    // let making moving obstacle
    let timerId=setInterval(function(){

        if(obstaclePosition===0){
 
             clearInterval(timerId)
        }

        obstaclePosition-=10;
        obstacle.style.left=obstaclePosition + 'px'
    },20)


}

generateObstacle();

