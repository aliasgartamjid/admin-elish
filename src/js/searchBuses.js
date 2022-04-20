// Buses from database
const buses = [
  {
    name: "Elish Paribahan",
    busType: "SP",
    coachNo: "305-SP-K",
    departureTime: "4:20",
    seatAvailable: "69",
    fare: "800",
    bookedSeats: ["A1", "C2", "D3"],
  },
  {
    name: "Elish Paribahan",
    busType: "MP",
    coachNo: "305-SP-M",
    departureTime: "4:69",
    seatAvailable: "25",
    fare: "692",
    bookedSeats: [],
  },
  {
    name: "Elish Paribahan",
    busType: "MP",
    coachNo: "305-SP-M",
    departureTime: "4:69",
    seatAvailable: "25",
    fare: "692",
    bookedSeats: [],
  },
  {
    name: "Elish Paribahan",
    busType: "MP",
    coachNo: "305-SP-M",
    departureTime: "4:69",
    seatAvailable: "25",
    fare: "692",
    bookedSeats: [],
  },
];

let selectedSeats = [];

const deleteShowSelectedSeats = (e) => {
  const busNo = e.path[0].classList[1].slice(4, 5);
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
};

const getSelectedSeats = (e) => {
  const busNo = e.path[0].classList[1].slice(4, 5);
  if (!selectedSeats.includes(e.target.value)) {
    selectedSeats.push(e.target.value);
    e.path[0].classList.remove("bg-white");
    e.path[0].classList.add("bg-green-500");
    e.path[0].classList.remove("text-black");
    e.path[0].classList.add("text-white");

    // Add Users to see the selected Seats
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
    e.path[0].classList.remove("bg-green-500");
    e.path[0].classList.add("bg-white");
    e.path[0].classList.remove("text-white");
  }
  console.log(selectedSeats);
};

const busesCol = document.querySelector("#busesCol");

busesCol.innerHTML = buses
  .map((bus, index) => {
    return `<div
    class="bus-${index} border border-gray-300 text-gray-600 shadow-lg"
  >
    <div
      class="grid grid-cols-1 gap-y-3 md:gap-y-0 md:grid-cols-5 p-4 text-lg hover:bg-blue-200/30 cursor-pointer"
    >
      <div class="col-span-1 gap-y-2 md:gap-y-0 md:col-span-2">
        <h1 class="font-bold text-xl">${bus.name}</h1>
        <h1>Bus Type : ${bus.busType}</h1>
        <h1>Coach No : ${bus.coachNo}</h1>
      </div>
      <div>
        <h1>Depurture Time : ${bus.departureTime}</h1>
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
          class="w-fit mx-auto border border-gray-300 shadow-md mt-2"
        >
          <div class="flex justify-end m-2">
            <h1
              class="py-2 px-5 text-center font-bold shadow-2xl bg-slate-300"
            >
              Driver
            </h1>
          </div>
          <div class="flex flex-col space-y-2 pb-6">
            <!-- A -->
            <div class="grid grid-cols-5 gap-x-2 mx-1 md:mx-2">
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="A1"
                class="border bus-${index}-A1 cursor-pointer border-gray-300 bg-white  w-[40px] h-auto leading-8 text-center"
              >
                A1
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="A2"
                class="border bus-${index}-A2 cursor-pointer border-gray-300 bg-white  w-[40px] h-auto leading-8 text-center"
              >
                A2
              </button>
              <p class="w-[40px] h-auto leading-8 text-center"></p>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="A3"
                class="border bus-${index}-A3 cursor-pointer border-gray-300 bg-white  w-[40px] h-auto leading-8 text-center"
              >
                A3
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="A4"
                class="border bus-${index}-A4 cursor-pointer border-gray-300 bg-white w-[40px] h-autol leading-8 text-center"
              >
                A4
              </button>
            </div>
            <!-- B -->
            <div class="grid grid-cols-5 gap-x-2 mx-1 md:mx-2">
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="B1"
                class="border bus-${index}-B1 cursor-pointer border-gray-300 bg-white  w-[40px] h-auto leading-8 text-center"
              >
                B1
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="B2"
                class="border bus-${index}-B2 cursor-pointer border-gray-300 bg-white  w-[40px] h-auto leading-8 text-center"
              >
                B2
              </button>
              <p class="w-[40px] h-auto leading-8 text-center"></p>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="B3"
                class="border bus-${index}-B3 cursor-pointer border-gray-300 bg-white  w-[40px] h-auto leading-8 text-center"
              >
                B3
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="B4"
                class="border bus-${index}-B4 cursor-pointer border-gray-300 bg-white  w-[40px] h-auto leading-8 text-center"
              >
                B4
              </button>
            </div>
            <!-- C -->
            <div class="grid grid-cols-5 gap-x-2 mx-1 md:mx-2">
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="C1"
                class="border bus-${index}-C1 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                C1
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="C2"
                class="border bus-${index}-C2 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                C2
              </button>
              <p class="w-[40px] h-auto leading-8 text-center"></p>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="C3"
                class="border bus-${index}-C3 cursor-pointer border-gray-300 bg-white w-full h-full leading-8 text-center"
              >
                C3
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="C4"
                class="border bus-${index}-C4 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                C4
              </button>
            </div>
            <!-- D -->
            <div class="grid grid-cols-5 gap-x-2 mx-1 md:mx-2">
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="D1"
                class="border bus-${index}-D1 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                D1
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="D2"
                class="border bus-${index}-D2 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                D2
              </button>
              <p class="w-[40px] h-auto leading-8 text-center"></p>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="D3"
                class="border bus-${index}-D3 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                D3
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="D4"
                class="border bus-${index}-D4 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                D4
              </button>
            </div>
            <!-- E -->
            <div class="grid grid-cols-5 gap-x-2 mx-1 md:mx-2">
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="E1"
                class="border bus-${index}-E1 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                E1
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="E2"
                class="border bus-${index}-E2 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                E2
              </button>
              <p class="w-[40px] h-auto leading-8 text-center"></p>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="E3"
                class="border bus-${index}-E3 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                E3
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="E4"
                class="border bus-${index}-E4 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                E4
              </button>
            </div>
            <!-- F -->
            <div class="grid grid-cols-5 gap-x-2 mx-1 md:mx-2">
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="F1"
                class="border bus-${index}-F1 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                F1
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="F2"
                class="border bus-${index}-F2 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                F2
              </button>
              <p class="w-[40px] h-auto leading-8 text-center"></p>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="F3"
                class="border bus-${index}-F3 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                F3
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="F4"
                class="border bus-${index}-F4 cursor-pointer border-gray-300 bg-white-white w-[40px] h-auto leading-8 text-center"
              >
                F4
              </button>
            </div>
            <!-- G -->
            <div class="grid grid-cols-5 gap-x-2 mx-1 md:mx-2">
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="G1"
                class="border bus-${index}-G1 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                G1
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="G2"
                class="border bus-${index}-G2 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                G2
              </button>
              <p class="ww-[40px] h-auto leading-8 text-center"></p>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="G3"
                class="border bus-${index}-G3 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                G3
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="G4"
                class="border bus-${index}-G4 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                G4
              </button>
            </div>
            <!-- H -->
            <div class="grid grid-cols-5 gap-x-2 mx-1 md:mx-2">
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="H1"
                class="border bus-${index}-H1 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                H1
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="H2"
                class="border bus-${index}-H2 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                H2
              </button>
              <p class="w-[40px] h-auto leading-8 text-center"></p>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="H3"
                class="border bus-${index}-H3 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                H3
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="H4"
                class="border bus-${index}-H4 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                H4
              </button>
            </div>
            <!-- I -->
            <div class="grid grid-cols-5 gap-x-2 mx-1 md:mx-2">
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="I1"
                class="border bus-${index}-I1 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                I1
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="I2"
                class="border bus-${index}-I2 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                I2
              </button>
              <p class="w-[40px] h-auto leading-8 text-center"></p>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="I3"
                class="border bus-${index}-I3 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                I3
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="I4"
                class="border bus-${index}-I4 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                I4
              </button>
            </div>
            <!-- J -->
            <div class="grid grid-cols-5 gap-x-2 mx-1 md:mx-2">
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="J1"
                class="border bus-${index}-J1 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                J1
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="J2"
                class="border bus-${index}-J2 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                J2
              </button>
              <p class="w-[40px] h-auto leading-8 text-center"></p>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="J3"
                class="border bus-${index}-J3 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                J3
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="J4"
                class="border bus-${index}-J4 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                J4
              </button>
            </div>
            <!-- K -->
            <div class="grid grid-cols-5 gap-x-2 mx-1 md:mx-2">
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="K1"
                class="border bus-${index}-K1 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                K1
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="K2"
                class="border bus-${index}-K2 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                K2
              </button>
             <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="K3"
                class="border bus-${index}-K3 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                K3
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="K4"
                class="border bus-${index}-K4 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center"
              >
                K4
              </button>
              <button
                type="button"
                onclick="getSelectedSeats(event)"
                value="K5"
                class="border bus-${index}-K5 cursor-pointer border-gray-300 bg-white w-[40px] h-auto leading-8 text-center">
                K5
              </button>
            </div>
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
                  class="hidden  flex-col justify-center w-[300px] border border-gray-300 px-3 py-2 items-center space-x-2"
                >
                 </div>
              </div>
              <div class="text-gray-600 text-lg mt-2 font-bold">
                <h1>Total Seats :</h1>
              </div>
              <div class="text-gray-600 text-lg mt-2 font-bold">
                <h1>Total Amount :</h1>
              </div>
              <div class="text-gray-600 text-lg mt-2 font-bold">
                <label for="">Choose Boarding Point & Time :</label>
                <select
                  name=""
                  id=""
                  class="w-full appearance-none focus:outline-none text-gray-600 border-b-2 p-2 text-lg border-blue-400 bg-transparent"
                >
                  <option selected="">Please Select</option>
                  <option value="volvo">RAJARBAGH</option>
                  <option value="saab">ARAMBAGH</option>
                </select>
              </div>
              <div>
                <button
                  type="button"
                  class="mt-3 w-full px-2 py-2 border-2 border-blue-600 text-blue-600 font-medium text-sm leading-tight uppercase rounded hover:bg-blue-600 hover:bg-opacity-10 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Next
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

const ViewSeats = (e) => {
  // Turns seat white after closing seats of a certain bus
  if (selectedSeats.length > 0) {
    selectedSeats.forEach((seat) => {
      for (let i = 0; i < buses.length; i++) {
        if (i !== e.target.name) {
          let changeRestButton = document.querySelector(`.bus-${i}-${seat}`);
          changeRestButton.classList.remove("bg-green-500");
          changeRestButton.classList.add("bg-white");
          changeRestButton.classList.remove("text-white");
          changeRestButton.classList.add("text-black");
        }
      }
    });
  }

  selectedSeats = [];

  // Disable booked Seats
  buses.forEach((bus, index) => {
    if (bus.bookedSeats.length > 0) {
      bus.bookedSeats.forEach((seat) => {
        let buttonToBeDisabled = document.querySelector(
          `.bus-${index}-${seat}`
        );
        buttonToBeDisabled.classList.add("bg-gray-500");
        buttonToBeDisabled.classList.add("text-white");
        buttonToBeDisabled.disabled = true;
      });
    }
  });

  // View Seats

  const busSeat = document.querySelector(`.SeatsBus-${e.target.name}`);
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
  } else {
    busSeat.classList.add("hidden");
    openOrCloseViews.innerText = "View Seats";
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
