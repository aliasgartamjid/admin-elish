let busNumber;
let coachNo;
let active;
let dropDownValue;

const getBusNumber = () => {
  busNumber = document.querySelector(".busnumber").value;
};

const getCoachNo = () => {
  coachNo = document.querySelector(".coachno").value;
};

const getActiveStatus = () => {
  active = document.querySelector(".activeStatus").checked;
};

const getDropdownValue = () => {
  if (document.getElementById("dropdownValue").value != "Please Select") {
    dropDownValue = document.getElementById("dropdownValue").value;
  }
};

const saveAndSubmit = () => {
  if (busNumber && coachNo && active && dropDownValue) {
    console.log(busNumber, coachNo, active, dropDownValue);
  } else {
    alert("Please Fill everything up!");
  }
};
