const btn = document.getElementById('form')
const ratingSelected = document.getElementById('selected-number')
const card1 = document.querySelector('.card')
const card2 = document.querySelector('.card2')

function runSuccess(e) {
  e.preventDefault()

  card1.setAttribute('hidden', true)
  card2.removeAttribute('hidden')
  const ratingValue = document.querySelector(
    "input[name='rating']:checked"
  ).value
  console.log(ratingValue)
  ratingSelected.innerText = ratingValue
}

btn.addEventListener('submit', runSuccess)
