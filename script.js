const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const bookingForm = document.getElementById('bookingForm');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
    });
  });
}

if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = bookingForm.querySelector('button[type="submit"]');
    const originalText = button.textContent;

    button.textContent = 'Request Sent';
    button.disabled = true;

    setTimeout(() => {
      bookingForm.reset();
      button.textContent = originalText;
      button.disabled = false;
      alert('Thank you! Your event request has been received. We will contact you shortly.');
    }, 1000);
  });
}

