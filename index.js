const colorBtn = document.getElementById("get-color")

function generateColorScheme(){
    fetch("https://www.thecolorapi.com/scheme?hex=24B1E0&mode=triad&count=6")
    .then(res => res.json())
    .then(data => console.log(data))
}

colorBtn.addEventListener("click", generateColorScheme)
