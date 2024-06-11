let count = 0; 

function increaseCount() {
  count++; 
  displayCount()
  checkCountValue()
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}

function checkCountValue() {
    if (count === 0) {
        alert("Your followers count has been reset.")
    }
    if (count === 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

function resetCount() {
    count = 0;
    document.getElementById('countDisplay').innerHTML = count;
}
