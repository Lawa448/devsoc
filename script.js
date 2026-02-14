// Find all the buttons
const buttons = document.querySelectorAll('.controls button');

// Do something when any button is clicked
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const timeOfDay = button.getAttribute('data-set-time');
        if (timeOfDay === 'Morning') {
            window.location.href = 'homepage.html';
        } else if (timeOfDay === 'Afternoon') {
            window.location.href = 'about-me.html';
        } else if (timeOfDay === 'Evening') {
            window.location.href = 'hobbies.html';
        } else if (timeOfDay === 'Night') {
            window.location.href = 'closing-page.html';
        }
    });
});