// 1. get the 2 inputs, the button, and the 2 spans (tip-amount and total)
// 2. when the button is clicked, do the rest inside that click function:
// 3. read the bill and the tip percentage from the inputs, as numbers
// 4. work out the tip amount: bill * tip percentage / 100
// 5. work out the total: bill + tip amount
// 6. show the tip amount and the total on the page, with 2 decimal places

const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const calc = document.getElementById("calc");
const tipmount = document.getElementById("tip-amount");
const total = document.getElementById("total");

calc.addEventListener("click", function (){
  bill.value = Number(bill.value);
  tip.value = Number(tip.value);
  const tipAmount = bill.value * tip.value / 100;
  tipmount.innerHTML = tipAmount.toFixed(2);
  total.innerHTML = (bill.value + tipAmount).toFixed(2);
})
