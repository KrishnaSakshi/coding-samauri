document.getElementById('contact-split-form').addEventListener('submit', e => {
  e.preventDefault();
  const status = document.getElementById('split-status');
  status.textContent = 'Sending...';
  setTimeout(() => {
    status.textContent = 'Thank you! I’ll reply shortly.';
    e.target.reset();
  }, 1000);
});
