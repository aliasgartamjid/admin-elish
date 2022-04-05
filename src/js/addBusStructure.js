let busNumber;
let hasAc;
let steatStructure;

const getBusNumber = (e) => {
  busNumber = e.target.value;
};

const hasAcCheck = (e) => {
  hasAc = e.target.checked;
};

const getSeatStructure = (e) => {
  steatStructure = e.target.value;
};

const getData = () => {
  if (busNumber && hasAc && steatStructure) {
    console.log(busNumber, hasAc, steatStructure);
  } else {
    alert("Please Fill everything up!");
  }
};
