const copyBoardingForm = document.querySelector(".copyBoardingForm");
const copyDroppingForm = document.querySelector(".copyDroppingForm");

const droppingForm = document.getElementsByClassName("droppingForm");
const boardingForm = document.getElementsByClassName("boardingForm");

const submitModal = document.getElementById("submitModal");

const addMoreBoarindPoint = () => {
  const node = copyBoardingForm.cloneNode(true);
  node.classList.remove("hidden");
  node.classList.add(`boardingform-${boardingForm.length}`);
  const boarding_point_time = document
    .getElementById("boarding_point_time")
    .appendChild(node);
};

const addMoreDroppingPoints = () => {
  const node = copyDroppingForm.cloneNode(true);
  node.classList.remove("hidden");
  node.classList.add(`droppingform-${droppingForm.length}`);

  const boarding_point_time = document
    .getElementById("dropping_point_time")
    .appendChild(node);
};

const submitData = () => {
  if (submitModal.classList.contains("hidden")) {
    submitModal.classList.remove("hidden");
  } else {
    submitModal.classList.add("hidden");
  }
};

const removeModal = () => {
  submitModal.classList.add("hidden");
};

const reload = () => {
  location.reload();
};

let selectedDays = [];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "All",
];

const daysCheckbox = (document.getElementById("daysCheckbox").innerHTML = days
  .map((day) => {
    return `<div class="flex flex-col items-center">
    <input
      
      onclick="onClickHandler(this)"
      class="boarding_day_input"
      type="checkbox"
      name=${day}
      value=${day}
    />
    <label for=${day}>${day}</label>
  </div>`;
  })
  .join(""));

// Get Selected Days
const onClickHandler = (event) => {
  if (event.name !== "All" && event.checked === true) {
    selectedDays.push(event.name);
    console.log(selectedDays);
  } else if (event.name !== "All" && event.checked === false) {
    const filtered = selectedDays.filter((word) => word !== event.name);
    selectedDays = [...filtered];
    console.log(selectedDays);
  } else if (event.name === "All" && event.checked === true) {
    const inputs = document.getElementsByClassName("boarding_day_input");
    for (let i = 0; i < inputs.length - 1; i++) {
      inputs[i].setAttribute("disabled", "true");
    }
    selectedDays.splice(0, selectedDays.length);
    selectedDays.push(
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    );
    console.log(selectedDays);
  } else if (event.name === "All" && event.checked === false) {
    selectedDays.splice(0, selectedDays.length);
    const inputs = document.getElementsByClassName("boarding_day_input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].removeAttribute("disabled", "true");
    }
    console.log(selectedDays);
  }
};

//Form submit logic
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", submit_form);

function submit_form(event) {
  let BoardinglocationArray = [];
  let BoardingtimeArray = [];

  let DeparturelocationArray = [];
  let DeparturetimeArray = [];

  const allInputForBoardingLocation = document.querySelectorAll("#deloc");
  const allInputforBoardingTime = document.querySelectorAll("#dtime");
  const allInputForDepartureLocation =
    document.querySelectorAll("#dropLocation");
  const allInputForDepartureTime = document.querySelectorAll("#droptime");

  const schedule_name = document.getElementById("schedule_name").value;
  const starting_city = document.getElementById("starting_city").value;
  const ending_city = document.getElementById("ending_city").value;

  allInputForBoardingLocation.forEach((element) => {
    if (element.value) {
      BoardinglocationArray.push(element.value);
    }
  });
  allInputforBoardingTime.forEach((element) => {
    if (element.value) {
      BoardingtimeArray.push(element.value);
    }
  });
  allInputForDepartureLocation.forEach((element) => {
    if (element.value) {
      DeparturelocationArray.push(element.value);
    }
  });
  allInputForDepartureTime.forEach((element) => {
    if (element.value) [DeparturetimeArray.push(element.value)];
  });

  //console.log(timeArray)

  //Send Axios request - create formData
  let data = new FormData();
  data.append("csrfmiddlewaretoken", "{{csrf_token}}");
  data.append("Boardinglocation", BoardinglocationArray);
  data.append("BoardingTime", BoardingtimeArray);
  data.append("Departurelocation", DeparturelocationArray);
  data.append("DepartureTime", DeparturetimeArray);
  data.append("selectedDays", selectedDays);

  data.append("scheduleName", schedule_name);
  data.append("startingCity", starting_city);
  data.append("endingCity", ending_city);

  /*axios.post('', data)
  .then(res => console.log("submitted"))
  .catch(err => console.lod(err))*/

  axios({
    method: "post",
    url: "",
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      //handle success
      window.location.replace("{% url 'BusSchedule:redirect-view' %}");
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
}
