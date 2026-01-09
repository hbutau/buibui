/**
 * WhatsApp Contact Form Handler
 * Redirects contact form submissions to WhatsApp
 */
(function () {
  "use strict";

  // WhatsApp number for Buibui Software
  const WHATSAPP_NUMBER = "263777009885";

  // Get the form element and cache DOM references
  const form = document.getElementById('whatsapp-contact-form');
  
  if (!form) return;
  
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const errorElement = form.querySelector('.error-message');
  const sentElement = form.querySelector('.sent-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    // Validate form
    if (!name || !email || !subject || !message) {
      displayError('Please fill in all fields');
      return;
    }

    // Validate email format
    if (!isValidEmail(email)) {
      displayError('Please enter a valid email address');
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

  /**
   * Validate email format
   */
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
    if (sentElement) {
      sentElement.classList.add('d-block');
    }
  }

  /**
   * Hide sent message
   */
  function hideSentMessage() {
    if (sentElement) {
      sentElement.classList.remove('d-block');
    }
  }

})();
