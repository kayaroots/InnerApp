const breath = document.getElementById("breath")
const yoga = document.getElementById("yoga")
const meditation = document.getElementById("meditation")
const ready = document.getElementById("ready")



breath.addEventListener("click", function() {
  console.log("Breathing")
})

yoga.addEventListener("click", function() {
  console.log("Yoga")
})
meditation.addEventListener("click", function() {
  console.log("Meditation")
})


ready.addEventListener("click", function() {
  console.log("works")
})

function remove() {
  console.log("Lets see if works")
}