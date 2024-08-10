// Example JavaScript code for the contact page
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your message!');
        form.reset();
    });
});
