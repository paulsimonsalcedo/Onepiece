window.addEventListener("scroll",()=>{
    let sticky = document.getElementById("nav");
    let offset = sticky.offsetTop;
    if(window.scrollY >= offset){
        sticky.classList.add("active");
    }
    else{
        sticky.classList.remove("active");
    }
})



//------------------------------



let slide = document.querySelectorAll(".popup");
let luffybg= document.getElementById("intro");

window.addEventListener("load",()=>{
    setTimeout(() => {
        slide.forEach((mySlide,idx)=>{
            setTimeout(() => {
                mySlide.classList.add("introActive");
            },(idx+1)*400);
        })
    }, 500);
    setTimeout(() => {
        luffybg.classList.add("show");
    }, 1000);
    slide.forEach((con)=>{
        setTimeout(() => {
            if(con.classList.contains("introActive")){
                con.classList.remove("introActive");
                con.classList.add("zoom");
            }
            
        },2500);
    })
    setTimeout(() => {
        luffybg.classList.add("zeroHeight");
    }, 3500);

})

