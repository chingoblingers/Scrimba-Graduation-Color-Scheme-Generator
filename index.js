const colorBtn = document.getElementById("get-color")


colorBtn.addEventListener("click", ()=>{

fetch("https://www.thecolorapi.com")
.then(res => res.json())
.then(data => console.log(data))        

})
