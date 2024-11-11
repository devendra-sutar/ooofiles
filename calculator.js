document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.value;

      if (value === '=') {
        try {
          // Evaluate the expression in the display
          display.textContent = eval(display.textContent);
        } catch {
          // Show an error if evaluation fails
          display.textContent = 'Error';
        }
      } else if (value === 'C') {
        // Clear the display
        display.textContent = '';
      } else {
        // Append the button value to the display
        display.textContent += value;
      }
    });
  });
});
