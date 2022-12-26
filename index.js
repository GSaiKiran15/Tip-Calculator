let bill_amount = document.getElementById("bill");
let tip_percentage = document.getElementById("tip");
let people = document.getElementById("people");
let final_amount = document.getElementById("finalBill");
let noOfPeople = Number(people.innerText);
noOfPeople = 1;
people.innerText = noOfPeople;

function calculateBill() {
  const billAmount = Number(bill_amount.value);
  const tipPercentage = Number(tip_percentage.value);
  const tip_amount = billAmount * (tipPercentage / 100);
  const finalAmount = (tip_amount + billAmount) / noOfPeople;
  final_amount.innerText = `$${finalAmount.toFixed(2)}`;
}

function personIncrementer() {
  noOfPeople += 1;
  people.innerText = noOfPeople;
  calculateBill();
}

function personDecrementor() {
  if (noOfPeople > 1) {
    noOfPeople -= 1;
    people.innerText = noOfPeople;
    calculateBill();
  }
}
