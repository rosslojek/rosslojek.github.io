// Get references to the button and the paragraph
const changeTextButton = document.getElementById('changeTextButton') as HTMLButtonElement;
const dynamicText = document.getElementById('dynamicText') as HTMLParagraphElement;

// Add a click event listener to the button
changeTextButton.addEventListener('click', () => {
    // Change the text of the paragraph
    dynamicText.textContent = 'Text changed! You clicked the button.';
});
