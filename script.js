const h1Ele = document.querySelector('h1')
const navEle = document.querySelector('nav')
window.addEventListener('scroll', ()=>{
    let h1Top =h1Ele.getBoundingClientRect().top;
    if(h1Top < 100){
        navEle.classList.add('sticky')
    }
    else{
        
        navEle.classList.remove('sticky')
    }
})