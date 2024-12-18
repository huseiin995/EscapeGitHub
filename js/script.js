let menuBtn = document.querySelector("#menu i")

menuBtn.addEventListener("click", function(){

    if(menuBtn.className == "fa-solid fa-bars"){
        menuBtn.className = "fa-solid fa-x"
        document.body.classList.add("showMenu")
    }
    else{
        menuBtn.className = "fa-solid fa-bars"
        document.body.classList.remove("showMenu")
    }
})