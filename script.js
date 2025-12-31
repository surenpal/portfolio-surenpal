document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here

    // Example: Display an alert when the page loads
    alert('Welcome to my portfolio!');

    // Example: Add an event listener to a button
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    }
});