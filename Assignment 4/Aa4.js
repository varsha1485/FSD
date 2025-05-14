document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const satisfaction = document.getElementById('satisfaction').value;

    console.log('Form Submitted');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Date of Birth:', dob);
    console.log('Satisfaction Level:', satisfaction);

    alert('Thank you for submitting the form!');
    form.reset();
  });
});
