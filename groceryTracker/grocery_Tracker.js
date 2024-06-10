let grocery1;
let grocery2;
let grocery3;

function calculateTotalAmount() {
  grocery1 = parseFloat(document.getElementById('amount1').value);
  grocery2 = parseFloat(document.getElementById('amount2').value);
  grocery3 = parseFloat(document.getElementById('amount3').value);

  let totalAmount = grocery1 + grocery2 + grocery3;

  document.getElementById(
    'total'
  ).innerText = `The total amount is: $ ${totalAmount}`;
}
