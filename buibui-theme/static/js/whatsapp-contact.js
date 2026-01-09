/**
 * WhatsApp Contact Form Handler
 * Redirects contact form submissions to WhatsApp
 */
(function () {
  "use strict";

  // WhatsApp number for Buibui Software
  const WHATSAPP_NUMBER = "263777009885";

  // Get the form element
  const form = document.getElementById('whatsapp-contact-form');

  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Get form values
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      // Validate form
      if (!name || !email || !subject || !message) {
        displayError('Please fill in all fields');
        return;
      }

      // Format the message for WhatsApp
      const whatsappMessage = formatWhatsAppMessage(name, email, subject, message);

      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

      // Show success message
      showSentMessage();

      // Redirect to WhatsApp after a short delay
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        
        // Reset form after redirect
        setTimeout(() => {
          form.reset();
          hideSentMessage();
        }, 1000);
      }, 500);
    });
  }

  /**
   * Format the contact form data into a WhatsApp message
   */
  function formatWhatsAppMessage(name, email, subject, message) {
    return `*Contact Form Submission*\n\n` +
           `*Name:* ${name}\n` +
           `*Email:* ${email}\n` +
           `*Subject:* ${subject}\n\n` +
           `*Message:*\n${message}`;
  }

  /**
   * Display error message
   */
  function displayError(errorText) {
    const errorElement = form.querySelector('.error-message');
    if (errorElement) {
      errorElement.textContent = errorText;
      errorElement.classList.add('d-block');
      
      // Hide error after 5 seconds
      setTimeout(() => {
        errorElement.classList.remove('d-block');
      }, 5000);
    }
  }

  /**
   * Show sent message
   */
  function showSentMessage() {
    const sentElement = form.querySelector('.sent-message');
    if (sentElement) {
      sentElement.classList.add('d-block');
    }
  }

  /**
   * Hide sent message
   */
  function hideSentMessage() {
    const sentElement = form.querySelector('.sent-message');
    if (sentElement) {
      sentElement.classList.remove('d-block');
    }
  }

})();
