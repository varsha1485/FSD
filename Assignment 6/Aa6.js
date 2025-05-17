function toggleFeedback(id) {
  const details = document.getElementById(id);
  if (details.hasAttribute('open')) {
    details.removeAttribute('open');
  } else {
    details.setAttribute('open', '');
  }
}
