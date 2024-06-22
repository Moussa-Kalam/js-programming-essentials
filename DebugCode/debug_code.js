function performOperation() {
  // Get user input from input fields
  const num1 = parseInt(document.getElementById('input1').value);
  const num2 = parseInt(document.getElementById('input2').value);

  // Check if inputs are valid numbers
  if (!isNaN(num1) && !isNaN(num2)) {
    let result = multiply(num1, num2);

    displayResult(result);
  } else {
    displayResult('Please enter valid numbers');
  }
}

function multiply(a, b) {
  // Introduce a debugger statement to pause execution
  debugger;

  return a * b;
}

function displayResult(result) {
  // Display the result in the paragraph element
  const resultElement = document.getElementById('result');
  resultElement.textContent = `The result is: ${result}`;
}
