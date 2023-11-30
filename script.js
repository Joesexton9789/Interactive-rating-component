const rating = document.querySelector('.ratings-container')
const submitBtn = document.querySelector('a')
const selectedNumber = document.getElementById('selected-number')
let selectedRating

function changeActive(e) {
  const activeNumber = document.querySelectorAll('.active')
  if (activeNumber.length >= 1) {
    activeNumber.forEach(child => child.classList.remove('active'))
  }
  if (e.target.classList.contains('rating')) {
    e.target.classList.toggle('active')
  }
}

function setSelectedNumber() {
  const active = document.querySelector('.active')

  console.log(active)
  if (active === null) {
    submitBtn.removeEventListener('click', setSelectedNumber)
    return
  }

  selectedRating = active.innerText

  selectedNum(selectedRating)
}

function selectedNum(rating) {
  selectedNumber.innerText = rating
}

submitBtn.addEventListener('click', setSelectedNumber)
rating.addEventListener('click', changeActive)
