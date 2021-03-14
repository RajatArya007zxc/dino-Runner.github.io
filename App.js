const dino=document.querySelector('.dino')
console.log(dino);

const control=(e)=>{

     if(e.keyCode===32){
        
        jumpingFunction();

     }
}
document.addEventListener('keyup',control);

function jumpingFunction(){

    
}