const form = document.getElementById("color-form")

function generateColorScheme(e){
    e.preventDefault()
    const formData = new FormData(form)
    const chosenColor = formData.get("user-color").slice(1)
    const chosenScheme = formData.get("color-schemes").toLowerCase()

    fetch(`https://www.thecolorapi.com/scheme?hex=${chosenColor}&mode=${chosenScheme}&count=6`)
    .then(res => res.json())
    .then(data => console.log(data))
}

form.addEventListener("submit", generateColorScheme)
