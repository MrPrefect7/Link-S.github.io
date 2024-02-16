const inputField = document.getElementById('inputField');
const getButton = document.getElementById('get');
const p1 = document.getElementById('p1');
const btn1 = document.getElementById('btn1');
const p2 = document.getElementById('p2');
const btn2 = document.getElementById('btn2');
const p3 = document.getElementById('p3');

getButton.addEventListener('click', function() {
    const text = inputField.value.trim(); // Trim leading/trailing whitespace

    if (!text) {
        alert('Please enter some text in the input box!');
        return;
    }

    p1.textContent = text;
    inputField.value = ''; // Clear the input field
});

btn1.addEventListener('click', function() {
    if (p1.textContent) {
        p2.textContent = p1.textContent;
        p1.textContent = '';
    } else {
        alert('There is no text to move from p1!');
    }
});

btn2.addEventListener('click', function() {
    if (p2.textContent) {
        p3.textContent = p2.textContent;
        p2.textContent = '';
    } else {
        alert('There is no text to move from p2!');
    }
});

// Remove unused button and its event listener (optional)
// btn3.remove();

      
    
