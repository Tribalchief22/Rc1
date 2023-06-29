document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    var nameInput = document.querySelector('input[type="name"]');
    var passwordInput = document.querySelector('input[type="password"]');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var name = nameInput.value;
      var password = passwordInput.value;
  
      if (name.trim() === '' || password.trim() === '') {
        alert('Please enter both name and password');
        return;
      }
  
      // Perform validation and authentication
      // Example code: Assume the name is "admin" and password is "password"
      if (name === 'Rekha' && password === 'Samarth') {
        alert('Login successful');
        // Redirect to another page or perform any desired action
        window.location.href = 'Time.html';
      } else {
        alert('Invalid name or password');
        // Clear the form or display an error message
      }
    });
  });
  
