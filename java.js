const newsLetter = document.querySelector('form');
const emailInput = newsLetter.querySelector('input[type="email"]');
const container = document.querySelector('.container');
const successModel = document.querySelector('.thanks');
const confirmationEmail = successModel.querySelector('.email-address');
const dismissButton = successModel.querySelector('button');

newsLetter.addEventListener('submit', (event) => {
  event.preventDefault();
  confirmationEmail.textContent = emailInput.value.trim();
  container.classList.add('is-subscribed');
});

dismissButton.addEventListener('click', () => {
  container.classList.remove('is-subscribed');
  newsLetter.reset();
});