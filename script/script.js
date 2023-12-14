const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (e) => {
  e.preventDefault;

  const name = document.getElementById('fname').value;

  alert(`Thank you ${name}, this is a demo page and no action was taken`)
})