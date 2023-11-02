
let bulb = document.querySelector("#bulb");
let button = document.querySelector("button");
let flag = 0

button.addEventListener("click", function(){
    if (flag == 0){
        bulb.style.backgroundColor = "yellow"
        flag = 1
        button.innerHTML = "OFF"
    }else{
        bulb.style.backgroundColor = "white"
        flag = 0
        button.innerHTML = "ON"
    }
    
})