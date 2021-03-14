const dino=document.querySelector('.dino')
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