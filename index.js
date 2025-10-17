const form = document.getElementById("color-form")
const colorContainer = document.getElementById("color-list")
let colorBox  = []

function generateColorScheme(e){
    e.preventDefault()
    const formData = new FormData(form)
    const chosenColor = formData.get("user-color").slice(1)
    const chosenScheme = formData.get("color-schemes")

    fetch(`https://www.thecolorapi.com/scheme?hex=${chosenColor}&mode=${chosenScheme}&count=5`)
    .then(res => res.json())
    .then(data => renderColorList(data.colors))
}

form.addEventListener("submit", generateColorScheme)

function generateColorListHtml(arr){
    return arr.map(color => {
     return  ` <div class="color-container">
                <div class="color-holder" style="background-color: ${color.hex.value};"> </div> 
                <p class="color-name"> ${color.hex.value} </p>
                </div>
                ` 
    }).join(" ")


}

function renderColorList(arr){
    const list = generateColorListHtml(arr)
    colorContainer.innerHTML = list
}