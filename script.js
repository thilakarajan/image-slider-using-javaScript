const images = document.getElementsByClassName('images')[0]
let count = 1
const right = () => {
  count++
  if (count == 4) {
    count = 1
  }
  images.innerHTML = `<img src="assets/Image ${count}.png" alt="" class="image" />`
}
const left = () => {
  count--
  if (count == 0) {
    count = 3
  }
  images.innerHTML = `<img src="assets/Image ${count}.png" alt="" class="image" />`
}
