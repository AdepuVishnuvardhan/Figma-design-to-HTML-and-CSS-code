// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Button click effect in the hero section
document.getElementById('getStartedBtn').addEventListener('click', function() {
  alert("Getting Started... We will help you on your journey!");
});

// Form validation and submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation (checking if all fields are filled)
  if (name && email && message) {
    document.getElementById('formResponse').textContent = "Thank you for your message, " + name + "! We'll get back to you soon.";
    document.getElementById('contactForm').reset();  // Reset the form after submission
  } else {
    document.getElementById('formResponse').textContent = "Please fill in all fields before submitting.";
  }
});
