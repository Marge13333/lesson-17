//////////select classss
const screenSection = document.querySelector(".screen")
const firstScreenButton = document.querySelector(".button")
const firstScreenDiv = document.querySelector(".firstScreenButton")
const fullScreenImage = document.querySelector(".secondScreen")


/////function
function removeButton(event) {
    firstScreenDiv.remove()
}

firstScreenButton.addEventListener("click", (e) => {

	firstScreenDiv.remove()

    const seconsScreenImg = document.createElement("div")
    seconsScreenImg.innerHTML = '<img src="https://fastly.picsum.photos/id/405/1400/800.jpg?hmac=4CRI7OpfDWtP4EydVd4Z-1NKSGhBmpZq8OaEXVu3be8" alt="fullscreenimg">'
    fullScreenImage.append(seconsScreenImg);
    seconsScreenImg.classList.toggle("fullScreenimg")

});