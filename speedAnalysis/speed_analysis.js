let testText = 'The quick brown fox jumps over the lazy dog.';
let startTime, endTime;

function startTest() {
  // Set the test text
  document.getElementById('inputText').value = testText;

  // Reset results and timer
  document.getElementById('output').innerHTML = '';
  startTime = new Date().getTime();

  // Change button text and functionality
  let button = document.getElementById('btn');
  button.innerHTML = 'End Test';
  button.onclick = endTest;
}

function endTest() {
  endTime = new Date().getTime();

  // Disable user input
  document.getElementById('userInput').readOnly = true;

  // Calculate time elapsed and words per minute (WPM)
  let timeElapsed = (endTime - startTime) / 1000; // in seconds
  let userTypedText = document.getElementById('userInput').value;

  // Split the text using regex to count words correctly
  let typedWords = userTypedText
    .split(/\s+/)
    .filter((word) => word !== '').length;

  let wpm = 0; // Default value

  if (timeElapsed !== 0 && !isNaN(typedWords)) {
    wpm = Math.round((typedWords / timeElapsed) * 60);
  }
  // Display the results
  let outputDiv = document.getElementById('output');
  outputDiv.innerHTML =
    '<h2>Typing Test Results:</h2>' +
    '<p>Words Typed: ' +
    typedWords +
    '</p>' +
    '<p>Time Elapsed: ' +
    timeElapsed.toFixed(2) +
    ' seconds</p>' +
    '<p>Words Per Minute (WPM): ' +
    wpm +
    '</p>';
    
  // Reset the button
  let button = document.getElementById('btn');
  button.innerHTML = 'Start Test';
  button.onclick = startTest;
}
