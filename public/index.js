let input = '';
const inputField = document.getElementById('task');
const confirmButton = document.getElementById('confirmButton');

confirmButton.addEventListener('click', () => {
    const input = inputField.value;
    console.log(input); 
    inputField.value = '';
});

