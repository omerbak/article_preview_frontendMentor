const shareIcon = document.querySelector(".share-box");
const socilaBox = document.querySelector(".social-box");
shareIcon.addEventListener("click", () => {
    //this is for the share icon anim
    shareIcon.parentElement.classList.toggle("share-active")
   /*  shareIcon.parentElement.classList.toggle("active")

    setTimeout(() => {
        if(shareIcon.parentElement.classList.contains("active")){
            socilaBox.style.opacity = "1"
        }else{
            socilaBox.style.opacity = "0";
        }
    }, 1) */

    //this code make the transition smooth on appear and disappear
    if(shareIcon.parentElement.classList.contains("active")){
        socilaBox.style.opacity = "0";
        setTimeout(() => {
            shareIcon.parentElement.classList.toggle("active")
        }, 400)
    } else{
        shareIcon.parentElement.classList.toggle("active");
        setTimeout(() => {
            socilaBox.style.opacity = "1";
        },1)
    }
    
})



//close the social-box if the user clicks oustide
document.addEventListener('click', (event) => {
    
    
    if (!shareIcon.parentElement.contains(event.target)) {
        socilaBox.style.opacity = "0";
        setTimeout(() => {
            shareIcon.parentElement.classList.remove("active")
        }, 400)
    }
});


//mobile hide social box when clicking on share-box2
const shareBox2 = document.querySelector(".share-box2");
const footer = document.querySelector(".footer")

shareBox2.addEventListener("click", () => {
    footer.classList.remove("active")
})

console.log(shareBox2)