const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting

  // get the form data
  const formData = new FormData(event.target);

  // do something with the form data
  // for example, you can log it to the console
  console.log({
    name: formData.get('name'),
    email: formData.get('email'),
    car: formData.get('car'),
    modifications: formData.get('modifications'),
    socialMedia: formData.get('social-media'),
  });

  // reset the form
  form.reset();
});

  function showAlert() {
    alert("Welcome to our website!");
  }