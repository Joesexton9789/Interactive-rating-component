const btn = document.getElementById('form')
const ratingSelected = document.getElementById('selected-number')
const card1 = document.querySelector('.card')
const card2 = document.querySelector('.card2')

function runSuccess(e) {
  e.preventDefault()

  const ratingValue = document.querySelector(
    "input[name='rating']:checked"
  ).value

  if ((ratingValue.value = null)) {
    return
  }

  card1.setAttribute('hidden', true)
  card2.removeAttribute('hidden')
  console.log(ratingValue)
  ratingSelected.innerText = ratingValue
}

btn.addEventListener('submit', runSuccess)
