document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values
  let username = document.getElementById('username').value.trim();
  let email = document.getElementById('email').value.trim();
  let phone = document.getElementById('phone').value.trim();
  let password = document.getElementById('password').value.trim();

  // Get error spans
  let usernameError = document.getElementById('usernameError');
  let emailError = document.getElementById('emailError');
  let phoneError = document.getElementById('phoneError');
  let passwordError = document.getElementById('passwordError');

  // Clear previous errors
  usernameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';
  passwordError.textContent = '';

  let valid = true;

  // Validate Username (minimum 3 characters)
  if (username.length < 3) {
    usernameError.textContent = 'Username must be at least 3 characters.';
    valid = false;
  }

  // Validate Email
  if (!validator.isEmail(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
  }

  // Validate Phone
  if (!validator.isMobilePhone(phone, 'any')) {
    phoneError.textContent = 'Please enter a valid phone number.';
    valid = false;
  }

  // Validate Password (minimum 6 characters)
  if (password.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    valid = false;
  }

  // If all validations pass
  if (valid) {
    console.log('Form submitted successfully!');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Password:', password);

    // You can reset form or send data to server here
    alert('Form submitted successfully!');
    document.getElementById('myForm').reset();
  }
});
