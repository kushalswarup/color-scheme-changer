let btns = document.querySelectorAll('.button')
let body = document.querySelector('body');
btns.forEach((i)=>{
    console.log(i);
    i.addEventListener('click',function(event){
        
            body.style.backgroundColor= event.target.id;
        
    })
})