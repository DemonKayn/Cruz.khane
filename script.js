document.getElementById('newsletterForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  const message = document.getElementById('formMessage');

  if (!email || !email.includes('@')) {
    message.style.color = 'red';
    message.textContent = 'Please enter a valid email address.';
  } else {
    message.style.color = 'green';
    message.textContent = 'Thanks for subscribing!';
  }
});
