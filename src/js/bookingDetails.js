let name;
let number;
let email;
let paymentMethod;

// get payment method
const selectedPayment = (e) => {
  paymentMethod = e.target.value;
};

// gets Name
const getName = (e) => {
  name = e.target.value;
};

// Email
const getEmail = (e) => {
  email = e.target.value;
};

// Chech valid number and get number
const checkNumber = (e) => {
  const pTag = document.querySelector(".inValid");
  if (e.target.value.length === 11) {
    pTag.classList.add("hidden");
    number = e.target.value;
  } else {
    pTag.classList.remove("hidden");
  }
};

const hamburgerMenu = () => {
  const hamburger = document.querySelector(".hamburger");
  if (hamburger.classList.contains("hidden")) {
    hamburger.classList.remove("hidden");
  } else {
    hamburger.classList.add("hidden");
  }
};
