// script.js
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const address = document.getElementById('address').value;
    console.log(`Name: ${name}, Number: ${number}, Address: ${address}`);
    alert('Thank you for contacting us! We will get back to you shortly.');
});
