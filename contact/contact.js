document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Simulate email sending
  var emailBody = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
  var emailSubject = "New Contact Form Submission";

  // Open the default email client with pre-filled values
  window.location.href = "mailto:webtdigitals@gmail.com?subject=" + encodeURIComponent(emailSubject) + "&body=" + encodeURIComponent(emailBody);
});

