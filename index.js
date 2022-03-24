var counter = 0
document.querySelector("#increase").addEventListener("click",increase)

function increase(){
    counter++
    document.querySelector("h1").innerText = counter
}

document.querySelector("#decrease").addEventListener("click",decrease)

function decrease(){
    counter--
    document.querySelector("h1").innerText = counter
}




