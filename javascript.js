//HACER QUE EL BOTÓN TE REGRESE AL INICIO DE LA PÁGINA//
const scrollBtn = document.getElementById('scrollBtn');

window.addEventListener('scroll',()=>{
    scrollFunction();
});

function scrollFunction() {
    if(window.scrollY > 100){
        scrollBtn.style.display = 'block'
    }else{
        scrollBtn.style.display ='none'
    }
}

scrollBtn.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})