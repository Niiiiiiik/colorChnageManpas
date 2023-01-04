// color chnaging mini-project

const body = document.body ;
const btn = document.querySelector("button") ;
console.log(btn) ;

const intervalID = setInterval(()=>{
    const red = Math.floor(Math.random()*225) ;
    const green = Math.floor(Math.random()*225) ;
    const blue = Math.floor(Math.random()*225) ;
    
    const rgb = `rgb(${red},${green},${blue})` ;
    // console.log(rgb) ;
    body.style.background = rgb ;
},700) ;

btn.addEventListener("click",()=>{
    clearInterval(intervalID);
    btn.textContent = "Fcuk You Sapnam";
})
// console.log(intervalID) ;