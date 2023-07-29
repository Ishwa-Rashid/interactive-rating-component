const mainContainer = document.getElementById("container");
const thanksContainer = document.getElementById("thank-you");
const submitButton = document.getElementById("submit-rating");
const rateAgain = document.getElementById("rate-again");
const buttons = document.querySelectorAll(".btn");
const actualRating = document.getElementById("rating");
let selected="";
buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      
        selected = e.target.textContent
        e.target.classList.add("selected")
    })
})

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none"
  thanksContainer.classList.remove("hidden")
  actualRating.textContent = `${selected}`
//   ratings.forEach((rating) => {
//     rating.addEventListener("click", () => {
//     actualRating.innerHTML = rating.innerHTML
//     })
//   })
})

rateAgain.addEventListener("click", () => {
  mainContainer.style.display = "block"
  thanksContainer.classList.add("hidden")
})