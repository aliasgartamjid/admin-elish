// Buses from database

const buses = [
  {
    coachNo: "Coach No: 305-DHA-BAR-M",
    busType: "AC",
    startingTime: "4:20 pm",
    seatAvailable: "69",
    fare: "800",
    bookedSeats: ["A1"],
    startingPoint: "Jatrabari",
    seatStructure: [
      ["A1", "A2", "X", "A3", "A4"],
      ["B1", "B2", "X", "B3", "B4"],
      ["C1", "C2", "C3", "C4", "C5"],
    ],
    boardingPoints: [
      ["Gulistan", "9.30am"],
      ["Gabtoli", "10.00am"],
    ],
    droppingPoints: [
      ["Barishal Town", "9.30am"],
      ["Borguna", "10.00am"],
    ],
  },
  {
    coachNo: "Coach No: 305-DHA-COX-A",
    busType: "AC",
    startingTime: "4:69 pm",
    seatAvailable: "25",
    fare: "692",
    bookedSeats: [],
    startingPoint: "Motijheel",
    seatStructure: [
      ["A1", "A2", "X", "A3"],
      ["B1", "B2", "X", "B3"],
    ],
    boardingPoints: [
      ["Kakrail", "10.30am"],
      ["Arambagh", "10.00am"],
    ],
    droppingPoints: [
      ["Gulistan", "9.30am"],
      ["Gabtoli", "10.00am"],
    ],
  },
  {
    coachNo: "Coach No: 305-BAR-DHA-N",
    busType: "AC",
    startingTime: "4:69 pm",
    seatAvailable: "25",
    fare: "692",
    bookedSeats: [],
    startingPoint: "Arambagh",
    seatStructure: [
      ["A1", "A2", "X", "A3", "A4"],
      ["B1", "B2", "X", "B3", "B4"],
    ],
    boardingPoints: [
      ["Saydabad", "9.30am"],
      ["Jatrabari", "10.00am"],
    ],
    droppingPoints: [
      ["Gulistan", "9.30am"],
      ["Gabtoli", "10.00am"],
    ],
  },
];

let selectedSeats = [];
let totalSelectedSeats = "";
let totalAmountofSeats = "";
let selectedBoardingPointAndTime = "";
let selectedDroppingPointAndTime = "";
let selectedCoachNo = "";
let personName;
let number;
let email;
let paymentMethod;

// get payment method
const selectedPayment = (e) => {
  paymentMethod = e.target.value;
};

// gets Name
const getName = (e) => {
  personName = e.target.value;
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

const getFormData = () => {};

const getData = (e) => {
  const busNo =
    e.composedPath()[0].classList[1].length < 5
      ? e.composedPath()[0].classList[1].slice(4, 5)
      : e.composedPath()[0].classList[1].slice(4, 6);

  if (
    selectedSeats.length > 0 &&
    selectedBoardingPointAndTime &&
    selectedDroppingPointAndTime &&
    selectedCoachNo &&
    number
  ) {
    totalSelectedSeats = selectedSeats.length;
    totalAmountofSeats = totalSelectedSeats * buses[busNo].fare;

    console.log(
      totalSelectedSeats,
      selectedSeats,
      totalAmountofSeats,
      selectedBoardingPointAndTime,
      selectedDroppingPointAndTime,
      selectedCoachNo,
      number,
      personName,
      email
    );
  } else {
    alert("A Field is Missing");
  }
};

const deleteShowSelectedSeats = (e) => {
  const busNo =
    e.composedPath()[0].classList[1].length < 5
      ? e.composedPath()[0].classList[1].slice(4, 5)
      : e.composedPath()[0].classList[1].slice(4, 6);

  selectedSeats.splice(selectedSeats.indexOf(e.target.value), 1);
  const showSelectedSeats = document.querySelector(`#selectedSeats-${busNo}`);
  showSelectedSeats.innerHTML = selectedSeats
    .map((seat) => {
      return `
        <div class=' flex justify-between items-center w-full border-b border-b-gray-400 py-2'>
          <p class="text-xl">${seat}</p>
          <button
          value=${seat}
          onclick='deleteShowSelectedSeats(event)'
          class="px-3 bus-${busNo} py-1 rounded-full border border-red-500"
          type="button"
          >
            x
          </button>
          </div>
        `;
    })
    .join("");

  const deleteSeatsfromStructure = document.querySelector(
    `.bus-${busNo}-${e.target.value}`
  );
  deleteSeatsfromStructure.classList.remove("bg-green-500");
  deleteSeatsfromStructure.classList.add("bg-white");
  deleteSeatsfromStructure.classList.remove("text-white");
  deleteSeatsfromStructure.classList.add("text-black");

  if (selectedSeats.length === 0) {
    showSelectedSeats.classList.add("hidden");
  }

  //total seats and total amount
  const totalSeats = document.querySelector(`.totalSeats-${busNo}`);
  totalSeats.innerText = selectedSeats.length;
  const totalAmount = document.querySelector(`.totalAmount-${busNo}`);
  totalAmount.innerText = selectedSeats.length * buses[busNo].fare;
};

const getSelectedSeats = (e) => {
  const busNo =
    e.composedPath()[0].classList[1].length < 9
      ? e.composedPath()[0].classList[1].slice(4, 5)
      : e.composedPath()[0].classList[1].slice(4, 6);

  if (!selectedSeats.includes(e.target.value)) {
    selectedSeats.push(e.target.value);
    e.composedPath()[0].classList.remove("bg-white");
    e.composedPath()[0].classList.add("bg-green-500");
    e.composedPath()[0].classList.remove("text-black");
    e.composedPath()[0].classList.add("text-white");

    // Show Users to see the selected Seats
    const showSelectedSeats = document.querySelector(`#selectedSeats-${busNo}`);
    showSelectedSeats.classList.remove("hidden");
    showSelectedSeats.classList.add("flex");
    showSelectedSeats.innerHTML = selectedSeats
      .map((seat) => {
        return `
        <div class='flex justify-between items-center w-full border-b border-b-gray-400 py-2'>
          <p class="text-xl">${seat}</p>
          <button
          value=${seat}
          onclick='deleteShowSelectedSeats(event)'
          class="px-3 bus-${busNo} py-1 rounded-full border border-red-500 hover:bg-red-500 hover:text-white"
          type="button"
          >
            x
          </button>
          </div>
        `;
      })
      .join("");

    //total seats and total amount
    const totalSeats = document.querySelector(`.totalSeats-${busNo}`);
    totalSeats.innerText = selectedSeats.length;
    const totalAmount = document.querySelector(`.totalAmount-${busNo}`);
    totalAmount.innerText = selectedSeats.length * buses[busNo].fare;
  } else {
    for (let i = 0; i < selectedSeats.length; i++) {
      if (selectedSeats[i] === e.target.value) {
        selectedSeats.splice(i, 1);
      }
    }
    const showSelectedSeats = document.querySelector(`#selectedSeats-${busNo}`);
    if (selectedSeats.length === 0) {
      showSelectedSeats.classList.add("hidden");
    } else {
      showSelectedSeats.innerHTML = selectedSeats
        .map((seat) => {
          return `
        <div class='flex justify-between items-center w-full border-b border-b-gray-400 py-2'>
          <p class="text-xl">${seat}</p>
          <button
          value=${seat}
          onclick='deleteShowSelectedSeats(event)'
          class="px-3 bus-${busNo} py-1 rounded-full border border-red-500 hover:bg-red-500 hover:text-white"
          type="button"
          >
            x
          </button>
          </div>
        `;
        })
        .join("");
    }
    e.composedPath()[0].classList.remove("bg-green-500");
    e.composedPath()[0].classList.add("bg-white");
    e.composedPath()[0].classList.remove("text-white");

    //total seats and total amount
    const totalSeats = document.querySelector(`.totalSeats-${busNo}`);
    totalSeats.innerText = selectedSeats.length;
    const totalAmount = document.querySelector(`.totalAmount-${busNo}`);
    totalAmount.innerText = selectedSeats.length * buses[busNo].fare;
  }
};

const getBoardingPointAndTime = (e) => {
  selectedBoardingPointAndTime = e.target.value;
};

const getdroppingPointAndTime = (e) => {
  selectedDroppingPointAndTime = e.target.value;
};

// Prints Each Bus
const busesCol = document.querySelector("#busesCol");

busesCol.innerHTML = buses
  .map((bus, index) => {
    return `<div
      class="bus-${index} border border-gray-300 text-gray-600 shadow-lg"
    >
      <div
        class="grid grid-cols-1 gap-y-1 md:gap-y-0 md:grid-cols-5 p-4 text-lg hover:bg-blue-200/30 cursor-pointer"
      >
        <div class="col-span-1 gap-y-2 md:gap-y-0 md:col-span-2">
          <h1 class='font-bold text-xl text-gray-600 md:hidden'>Starting Time : ${bus.boardingPoints[0][1]}</h1>
          <h1>Starting Point : ${bus.boardingPoints[0][0]}</h1>
          <h1 class="">${bus.coachNo}</h1>
          <h1>Bus Type : ${bus.busType}</h1>
        </div>
        <div>
          <h1 class='font-bold text-xl text-gray-600 hidden md:flex'>Starting Time : ${bus.boardingPoints[0][1]}</h1>
        </div>
        <div><h1>Seat Available : ${bus.seatAvailable}</h1></div>
        <div class="md:text-right">
          <h1 class="font-bold text-xl">Price (BDT) : ${bus.fare}</h1>
          <button
            onclick="ViewSeats(event)"
            name="${index}"
            type="button"
            class="mt-2 viewSeatsButton-${index} px-2 py-2 border-2 border-blue-600 text-blue-600 font-medium text-sm leading-tight uppercase rounded hover:bg-blue-600 hover:bg-opacity-10 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            View Seats
          </button>
        </div>
      </div>
      <!-- Seats -->
      <div class="hidden SeatsBus-${index}">
        <div
          class="flex justify-center my-2 text-gray-600 text-xl font-bold py-3 border-b border-t border-gray-300"
        >
          <h1>Book Your Seat</h1>
        </div>
        <!-- Available Seat and Sold Seat -->
        <div class="flex flex-row flex-wrap text-[13px] md:text-sm justify-center md:justify-start items-center py-2 my-1 space-x-2 md:space-x-3 w-full md:mx-2">
          <div class="flex items-center gap-x-1 md:gap-x-2">
            <div class="w-5 h-5 bg-white border border-gray-400"></div>
            <h1 class='text-black'>Available Seat</h1>
          </div>
          <div class="flex items-center gap-x-1 md:gap-x-2">
            <div class="w-5 h-5 bg-gray-500"></div>
            <h1>Sold Seat</h1>
          </div>
          <div class="flex items-center gap-x-1 md:gap-x-2">
          <div class="w-5 h-5 bg-green-500"></div>
          <h1>Selected Seat</h1>
        </div>
        </div>
        <!-- Seat and Checkout Option -->
        <div class="grid grid-cols-1 md:grid-cols-3 my-2">
          <!-- Seat -->
          <div
            class="w-fit h-fit mx-auto border border-gray-300 shadow-md mt-2"
          >
            <div class="flex justify-end m-2">
              <h1
                class="py-2 px-5 text-center font-bold shadow-2xl bg-slate-300"
              >
                Driver
              </h1>
            </div>
            <div class="seatStructure-${index} flex flex-col space-y-2 pb-6">
            </div>
          </div>
          <!-- Checkout -->
          <div class="col-span-2 py-2 shadow-lg">
            <div class="flex flex-col gap-y-4">
              <div class="text-center">
                <h1 class="text-2xl text-gray-600 font-bold">
                  Booking Details :
                </h1>
              </div>
              <div class="border border-gray-300 w-fit mx-auto px-4 py-2">
                <div class="flex flex-col space-y-2 items-center">
                  <div class="p-2">
                    <h1 class="font-bold text-lg">Selected Seats :</h1>
                  </div>
                  <div
                    id='selectedSeats-${index}'
                    class="hidden flex-col justify-center w-[300px] border border-gray-300 px-3 py-2 items-center space-x-2"
                  >
                   </div>
                </div>
                <div class="text-gray-600 flex gap-x-2 items-center text-lg mt-2 font-bold">
                  <h1>Total Seats :</h1>
                  <h1 class='totalSeats-${index}'></h1>
                </div>
                <div class="text-gray-600 flex gap-x-2 items-center text-lg mt-2 font-bold">
                  <h1>Total Amount :</h1>
                  <h1 class='totalAmount-${index}'></h1>
                </div>
                <div class="text-gray-600 text-lg mt-2 font-bold">
                  <label for="">Choose Boarding Counter & Time :</label>
                  <select
                    name=""
                    onchange='getBoardingPointAndTime(event)'
                    id="boardingPoints-${index}"
                    class="w-full appearance-none focus:outline-none text-gray-600 border-b-2 p-2 text-lg border-blue-400 bg-transparent"
                  >
                  </select>
                </div>
                <div class="text-gray-600 text-lg mt-2 font-bold">
                  <label for="">Choose Dropping Counter & Time :</label>
                  <select
                    name=""
                    onchange='getdroppingPointAndTime(event)'
                    id="droppingPoints-${index}"
                    class="w-full appearance-none focus:outline-none text-gray-600 border-b-2 p-2 text-lg border-blue-400 bg-transparent"
                  >
                  </select>
                </div>
                <!-- Passenger Details -->
            <div class="flex flex-col space-y-3">
              <div class="px-2">
                <h1
                  class="text-gray-600 text-lg mt-2 font-bold"
                >
                  Passenger Details
                </h1>
              </div>
              <form class="flex px-3 flex-col space-y-3">
                <!-- Name -->
                <div class="flex flex-col justify-center gap-y-2">
                  <label
                    for=""
                    class="text-gray-500 text-lg font-bold"
                    >Name :</label
                  >
                  <input
                    placeholder="Enter your name"
                    type="text"
                    onchange="getName(event)"
                    required
                    class="w-full focus:outline-none shadow-lg text-gray-600 rounded-md border-2 p-2 text-xs md:text-sm border-blue-400 bg-transparent"
                  />
                </div>
                <!-- Number -->
                <div class="flex flex-col justify-center gap-y-1">
                  <label
                    for=""
                    class="text-gray-500 text-lg font-bold"
                    >Mobile<span class="ml-1 text-red-500">*</span> :</label
                  >
                  <input
                    placeholder="Enter your number"
                    type="text"
                    onchange="checkNumber(event)"
                    maxlength="20"
                    required
                    class="w-full focus:outline-none shadow-lg text-gray-600 rounded-md border-2 p-2 text-xs md:text-sm border-blue-400 bg-transparent"
                  />
                  <p class="text-red-500 inValid hidden">
                    Invalid Number! Please enter correct number
                  </p>
                </div>
                <!-- Email -->
                <div class="flex flex-col justify-center gap-y-1">
                  <label
                    for=""
                    class="text-gray-500 text-lg font-bold"
                    >Email :</label
                  >
                  <input
                    placeholder="Enter your email"
                    type="email"
                    onchange="getEmail(event)"
                    class="w-full focus:outline-none shadow-lg text-gray-600 rounded-md border-2 p-2 text-xs md:text-sm border-blue-400 bg-transparent"
                  />
                </div>
                <!-- Payment Method -->
                <div class="flex flex-col justify-center gap-y-1">
                  <label
                    for=""
                    class="text-gray-500 text-lg font-bold"
                    >Payment Method :</label
                  >
                  <select
                    name=""
                    onchange="selectedPayment(event)"
                    class="w-full focus:outline-none text-gray-600 border-2 rounded-md p-2 text-xs md:text-sm border-blue-400 bg-transparent"
                  >
                    <option selected="">Please Select</option>
                    <option value="cash">Cash</option>
                    <option value="bkash">BKASH</option>
                    <option value="nagad">NAGAD</option>
                  </select>
                </div>
              </form>
            </div>
                <div>
                  <button
                    type="button"
                    onclick='getData(event)'
                    class="mt-3 bus-${index} w-full px-2 py-2 border-2 border-blue-600 text-blue-600 font-medium text-sm leading-tight uppercase rounded hover:bg-blue-600 hover:bg-opacity-10 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  })
  .join("");

// Prints Seat Structure
buses.forEach((bus, index) => {
  const inputSeatStructure = document.querySelector(`.seatStructure-${index}`);

  let generatedHTML = "";

  for (let row of bus.seatStructure) {
    generatedHTML += `<div class="flex gap-x-2 mx-1 md:mx-2">`;
    for (let seat of row) {
      if (seat === "X") {
        generatedHTML += `<p class="w-[40px] h-auto leading-8 text-center"></p>`;
        continue;
      }
      generatedHTML += `<button
        type="button"
        onclick="getSelectedSeats(event)"
        value="${seat}"
        class="border bus-${index}-${seat} cursor-pointer border-gray-300 bg-white  w-[40px] h-auto leading-8 text-center"
        >
      ${seat}
      </button>`;
    }
    generatedHTML += `</div>`;

    inputSeatStructure.innerHTML = generatedHTML;
  }
});

// Prints EachBus Boarding Point and Time and Dropping Point and Time
buses.forEach((bus, index) => {
  const inputBoardingPointandTime = document.getElementById(
    `boardingPoints-${index}`
  );
  inputBoardingPointandTime.innerHTML += `<option selected="">Please Select</option>`;

  for (let point of bus.boardingPoints) {
    inputBoardingPointandTime.innerHTML += `
      <option value="${point[0]} - ${point[1]}">${point[0]} (${point[1]})</option>
      `;
  }

  const inputDroppingPointandTime = document.getElementById(
    `droppingPoints-${index}`
  );
  inputDroppingPointandTime.innerHTML += `<option selected="">Please Select</option>`;

  for (let point of bus.droppingPoints) {
    inputDroppingPointandTime.innerHTML += `
      <option value="${point[0]} - ${point[1]}">${point[0]} (${point[1]})</option>
      `;
  }
});

const ViewSeats = (e) => {
  // View Seats

  const busSeat = document.querySelector(`.SeatsBus-${e.target.name}`);
  const busNo =
    e.composedPath()[0].classList[1].length <= 17
      ? e.composedPath()[0].classList[1].slice(16, 17)
      : e.composedPath()[0].classList[1].slice(16, 18);

  const openOrCloseViews = document.querySelector(
    `.viewSeatsButton-${e.target.name}`
  );
  if (busSeat.classList.contains("hidden")) {
    busSeat.classList.remove("hidden");
    // Hide rest of the buses instead of the selected bus
    buses.forEach((bus, index) => {
      for (let i = 0; i < buses.length; i++) {
        if (i != e.target.name) {
          const eachBus = document.querySelector(`.SeatsBus-${i}`);
          eachBus.classList.add("hidden");
          document.querySelector(`.viewSeatsButton-${i}`).innerText =
            "View Seats";
        }
      }
    });
    openOrCloseViews.innerText = "Close Seats";
    selectedBoardingPointAndTime = "";
    selectedCoachNo = buses[busNo].coachNo;
  } else {
    busSeat.classList.add("hidden");
    openOrCloseViews.innerText = "View Seats";
  }

  // Delete show selected seats
  buses.forEach((bus, index) => {
    const showSelectedSeats = document.querySelector(`#selectedSeats-${index}`);
    showSelectedSeats.classList.add("hidden");
    showSelectedSeats.classList.remove("flex");
  });

  // Turns seat white after closing seats of a certain bus
  if (selectedSeats.length > 0) {
    selectedSeats.forEach((seat) => {
      for (let i = 0; i < buses.length; i++) {
        if (i !== e.target.name) {
          let changeRestButton = document.querySelector(`.bus-${i}-${seat}`);
          if (changeRestButton) {
            changeRestButton.classList.remove("bg-green-500");
            changeRestButton.classList.add("bg-white");
            changeRestButton.classList.remove("text-white");
            changeRestButton.classList.add("text-black");
          }
        }
      }
    });
  }

  selectedSeats = [];

  // Disable booked Seats

  if (buses[e.target.name].bookedSeats.length > 0) {
    buses[e.target.name].bookedSeats.forEach((seat) => {
      const buttonToBeDisabled = document.querySelector(
        `.bus-${e.target.name}-${seat}`
      );
      buttonToBeDisabled.classList.add("bg-gray-500");
      buttonToBeDisabled.classList.add("text-white");
      buttonToBeDisabled.disabled = true;
    });
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

const removeOrAddSearch = () => {
  const search = document.getElementById("searchBuses");
  const searchAgainButton = document.getElementById("searchAgainButton");
  if (search.classList.contains("hidden")) {
    search.classList.remove("hidden");
    searchAgainButton.innerHTML = `<h1>Search Buses <span class='ml-2 px-2 py-0.5 rounded-full border-2 border-blue-700'>X</span></h1>`;
  } else {
    search.classList.add("hidden");
    searchAgainButton.innerHTML = `<h1>Search Buses</h1>`;
  }
};

const checkboxOne = (e) => {
  if (e.target.checked) {
    document.querySelector(".checkboxOne").classList.add("bg-blue-400");
  } else {
    document.querySelector(".checkboxOne").classList.remove("bg-blue-400");
  }
};

const checkboxTwo = (e) => {
  if (e.target.checked) {
    document.querySelector(".checkboxTwo").classList.add("bg-blue-400");
  } else {
    document.querySelector(".checkboxTwo").classList.remove("bg-blue-400");
  }
};

const checkboxThree = (e) => {
  if (e.target.checked) {
    document.querySelector(".checkboxThree").classList.add("bg-blue-400");
  } else {
    document.querySelector(".checkboxThree").classList.remove("bg-blue-400");
  }
};
