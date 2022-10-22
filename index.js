function myFunction() {
    var element = document.body;
    var element2 = document.getElementById("heading")
    var element3 = document.getElementsByClassName("color")
    var element4 = document.getElementById("navbar")
    var element5 = document.getElementById("night")
   
    
    console.log(element3)
    element.classList.toggle("dark-mode");
    if (element2.style.borderBlockColor == "rgb(22, 22, 22)") {
        element2.style.borderBlockColor = "white"
        element4.style.backgroundColor = "white"
        element4.style.borderBlockColor = "black"
        element3[0].style.color = "black"
        element3[1].style.color = "black"
        element3[2].style.color = "black"
        element3[3].style.color = "black"
      
        element5.innerHTML =`<i class="fa-solid fa-moon"></i>`
    }
    else {
        
        element2.style.borderBlockColor = "rgb(22, 22, 22)"
        element4.style.backgroundColor = "rgb(22, 22, 22)"
        element4.style.borderBlockColor = "white"
        element3[0].style.color = "white"
        element3[1].style.color = "white"
        element3[2].style.color = "white"
        element3[3].style.color = "white"
        element5.innerHTML =`<i class="fa-solid fa-sun"></i>`
       
    }
    // element3.style.backgroundColor ="black"
    

}