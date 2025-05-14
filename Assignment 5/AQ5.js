document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedbackForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;

    // Save to localStorage
    localStorage.setItem('userName', name);
    localStorage.setItem('userFeedback', feedback);

    alert('Thank you for your feedback! It has been saved using localStorage.');
    form.reset();
  });
});
