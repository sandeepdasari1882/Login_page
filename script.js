function validateForm() {
    // Get form values
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();
  
    // Check if all fields are filled
    if (firstName == "" || lastName == "" || email == "" || password == "" || confirmPassword == "") {
      alert("Please fill in all fields.");
      return false;
    }
  
    // Check if password and confirm password match
    if (password != confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
  
    // Check if password meets minimum length requirement
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }
  
    // Check if email is valid
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      alert("Invalid email address.");
      return false;
    }
  
    // If all validation checks pass, submit form
    alert("Registration successful!");
    return true;
  }

