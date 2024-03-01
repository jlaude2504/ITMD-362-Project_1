document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get user input
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const interest = document.getElementById('interest').value;
  
      // Display confirmation message
      alert("Thank you, ${name}! You have successfully signed up for ${interest}. We will contact you at ${email}.");
  

    });
  });