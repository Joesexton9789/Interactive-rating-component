const selectedNumber = document.getElementById('selected-number')

function selectedNum() {
  console.log(selectedRating)
  selectedNumber.innerText = selectedRating
}

window.addEventListener('DOMContentLoaded', selectedNum)
