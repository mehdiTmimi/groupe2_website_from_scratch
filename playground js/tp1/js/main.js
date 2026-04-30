// element.addEventListener("event",callback);
// le callback sera execute une fois l event est realise sur l element
let titre1 = document.getElementsByClassName("hero-title")[0]
titre1.addEventListener("click",()=>{
    alert("salut")
})
titre1.addEventListener("mouseleave",()=>{
    console.log("salut")
})
resetBtn.addEventListener("click",()=>{
    document.getElementById("name").value=""
})
