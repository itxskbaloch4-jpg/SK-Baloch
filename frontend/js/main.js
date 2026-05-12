document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('leadForm');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
      };

      const result = await window.submitLead(formData);

      alert(result.message);
    });
  }
});
