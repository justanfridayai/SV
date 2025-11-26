document.addEventListener('DOMContentLoaded', () => {
  const chatCircle = document.getElementById('chatCircle');
  const chatBox = document.getElementById('chatBox');
  const closeChat = document.getElementById('closeChat');

  const optAppointment = document.getElementById('optAppointment');
  const optLocation = document.getElementById('optLocation');
  const optCall = document.getElementById('optCall');

  // toggle function (adds/removes class)
  function toggleChat() {
    const isOpen = chatBox.classList.toggle('open');
    chatBox.setAttribute('aria-hidden', !isOpen);
  }

  // open on click or Enter/Space for accessibility
  chatCircle.addEventListener('click', toggleChat);
  chatCircle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleChat(); }
  });

  // close
  closeChat.addEventListener('click', () => chatBox.classList.remove('open'));

  // Option actions - replace links and number with your real ones
  optAppointment.addEventListener('click', () => {
    window.open('https://youtube.com', '_blank'); // appointment link
    // optionally close after click:
    chatBox.classList.remove('open');
  });

  optLocation.addEventListener('click', () => {
    window.open('https://www.google.com/maps?q=VR+Mall+Chennai', '_blank'); // location link
    chatBox.classList.remove('open');
  });

  optCall.addEventListener('click', () => {
    // Use tel: to open phone app on phones; on desktop it may trigger calling apps if present
    window.location.href = 'tel:+919876543210'; // put real number
    chatBox.classList.remove('open');
  });

  // optional: close when clicking outside the chat box
  document.addEventListener('click', (e) => {
    if (!chatBox.classList.contains('open')) return;
    const outside = !chatBox.contains(e.target) && !chatCircle.contains(e.target);
    if (outside) chatBox.classList.remove('open');
  });
});
