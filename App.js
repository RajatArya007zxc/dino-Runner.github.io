const dino=document.querySelector('.dino')
let isJumping=false;

const control=(e)=>{

     if(e.keyCode===32){
         if(!isJumping){
 isJumping=true;
 jumpingFunction();
         }
        
        

     }
}
document.addEventListener('keyup',control);

function jumpingFunction(){

    let position=0;

    const timerId=setInterval(function(){

       if(position===150){
           clearInterval(timerId);

           ///dino down

          const downInterval=setInterval(function(){
  
            if(position===0) {
                clearInterval(downInterval)
                isJumping=false;
            }
            position-=30;
            dino.style.bottom=position+'px';
          },20)
       }
         
        ///dino up
        console.log('up')
        position+=30;
        dino.style.bottom=position+'px';

    },20)

    
}