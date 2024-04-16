// Get all solution buttons
const toggleButtons = document.querySelectorAll('.toggle-button');

// Add click event listener to each solution button
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Hide all solution texts
        const solutionTexts = button.parentElement.nextElementSibling.querySelectorAll('.solution-text');
        solutionTexts.forEach(text => {
            text.style.display = 'none';
        });

        // Get the index of the clicked button
        const buttonIndex = Array.from(button.parentElement.children).indexOf(button);

        // Show the corresponding solution text
        solutionTexts[buttonIndex].style.display = 'block';
    });
});





