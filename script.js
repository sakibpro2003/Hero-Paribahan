// Booked seat count
let selectedSeatCount = 0;
let availableSeatCount = 8;
let totalPrice;
let grandTotal;
totalPrice = parseFloat(totalPrice);
grandTotal = parseFloat(grandTotal);
function nowclick(id, className) {
  console.log(id);
  const bgColor = document.getElementById(id);
  bgColor.style.backgroundColor = "#1DD100";
  selectedSeatCount++;
  availableSeatCount--;
  const disableBtn = document.getElementsByClassName(className);

  if (selectedSeatCount === 4) {
    for (let btn of disableBtn) {
      btn.disabled = true;
    }
  }
  const setSeatCount = document.getElementById("availableSeat");
  console.log(availableSeatCount);
  setSeatCount.innerText = availableSeatCount;

  document.getElementById("seatCount").innerText = selectedSeatCount;
  totalPrice = selectedSeatCount * 550;
  const getTotal = document.getElementById("totalAmount");
  getTotal.innerText = totalPrice;
}

function apply() {
  const getinput = document.getElementById("inputCoupon");
  console.log(getinput.value);
  if (getinput.value === "NEW15") {
    grandTotal = totalPrice - totalPrice * (15 / 100);
    console.log(typeof grandTotal);
    const grand = document.getElementById("grandTotal");
    grand.innerText = grandTotal;
    const join = document.getElementById("join");
    join.classList.add("hidden");
  }
}
