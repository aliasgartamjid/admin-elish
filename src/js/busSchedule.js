let busList;
let boardingPointAndTime;
let seatClass;
let price;

const getBusList = () => {
  if (document.getElementById("busList").value != "Please Select") {
    busList = document.getElementById("busList").value;
  }
};

const getBoardingPointAndTime = () => {
  if (
    document.getElementById("boardingPointAndTime").value != "Please Select"
  ) {
    boardingPointAndTime = document.getElementById(
      "boardingPointAndTime"
    ).value;
  }
};

const getSeatClass = (e) => {
  seatClass = e.target.value;
};

const getPrice = (e) => {
  price = e.target.value;
};

const getData = () => {
  if (busList && boardingPointAndTime && seatClass && price) {
    console.log(busList, boardingPointAndTime, seatClass, price);
  } else {
    alert("Please Fill everything up!");
  }
};
