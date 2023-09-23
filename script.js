const passwordInput = document.getElementById('password');
const showHideButton = document.getElementById('showHideButton');

showHideButton.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});
