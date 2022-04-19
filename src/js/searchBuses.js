const buses = [
  {
    name: "Elish Paribahan",
    busType: "SP",
    coachNo: "305-SP-K",
    departureTime: "4:20",
    seatAvailable: "69",
    fare: "800",
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

const busesCol = document.querySelector("#busesCol");

busesCol.innerHTML = buses
  .map((bus, index) => {
    return `<div class="bus-${index} border border-gray-300 text-gray-600 shadow-lg">
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
      name= ${index}
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
  <div class="flex flex-col px-2 py-1 space-y-2">
    <div class="flex items-center gap-x-2">
      <div class="w-5 h-5 bg-green-500"></div>
      <h1>Available Seat</h1>
    </div>
    <div class="flex items-center gap-x-2">
      <div class="w-5 h-5 bg-red-600"></div>
      <h1>Sold Seat</h1>
    </div>
  </div>
  <!-- Seat and Checkout Option -->
  <div class="grid grid-cols-1 md:grid-cols-3">
    <!-- Seat -->
    <div class="w-full border border-gray-300 shadow-md mt-2">
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
          <p
            class="border border-gray-300 w-full h-full leading-8 text-center"
          >
            A
          </p>
          <p
            class="border border-gray-300 bg-green-500 text-white w-full h-full leading-8 text-center"
          >
            A1
          </p>
          <p class="w-full h-full leading-8 text-center"></p>
          <p
            class="border border-gray-300 bg-green-500 text-white w-full h-full leading-8 text-center"
          >
            A2
          </p>
          <p
            class="border border-gray-300 bg-green-500 text-white w-full h-full leading-8 text-center"
          >
            A3
          </p>
        </div>
        <!-- B -->
        <div class="grid grid-cols-5 gap-x-2 mx-1 md:mx-2">
          <p
            class="border border-gray-300 w-full h-full leading-8 text-center"
          >
            B
          </p>
          <p
            class="border border-gray-300 bg-green-500 text-white w-full h-full leading-8 text-center"
          >
            B1
          </p>
          <p class="w-full h-full leading-8 text-center"></p>
          <p
            class="border border-gray-300 bg-green-500 text-white w-full h-full leading-8 text-center"
          >
            B2
          </p>
          <p
            class="border border-gray-300 bg-green-500 text-white w-full h-full leading-8 text-center"
          >
            B3
          </p>
        </div>
        <!-- C -->
        <div class="grid grid-cols-5 gap-x-2 mx-1 md:mx-2">
          <p
            class="border border-gray-300 w-full h-full leading-8 text-center"
          >
            C
          </p>
          <p
            class="border border-gray-300 bg-green-500 text-white w-full h-full leading-8 text-center"
          >
            C1
          </p>
          <p class="w-full h-full leading-8 text-center"></p>
          <p
            class="border border-gray-300 bg-green-500 text-white w-full h-full leading-8 text-center"
          >
            C2
          </p>
          <p
            class="border border-gray-300 bg-green-500 text-white w-full h-full leading-8 text-center"
          >
            C3
          </p>
        </div>
        <!-- D -->
        <div class="grid grid-cols-5 gap-x-2 mx-1 md:mx-2">
          <p
            class="border border-gray-300 w-full h-full leading-8 text-center"
          >
            D
          </p>
          <p
            class="border border-gray-300 bg-green-500 text-white w-full h-full leading-8 text-center"
          >
            D1
          </p>
          <p class="w-full h-full leading-8 text-center"></p>
          <p
            class="border border-gray-300 bg-green-500 text-white w-full h-full leading-8 text-center"
          >
            D2
          </p>
          <p
            class="border border-gray-300 bg-green-500 text-white w-full h-full leading-8 text-center"
          >
            D3
          </p>
        </div>
        <!-- E -->
        <div class="grid grid-cols-5 gap-x-2 mx-1 md:mx-2">
          <p
            class="border border-gray-300 w-full h-full leading-8 text-center"
          >
            E
          </p>
          <p
            class="border border-gray-300 bg-green-500 text-white w-full h-full leading-8 text-center"
          >
            E1
          </p>
          <p class="w-full h-full leading-8 text-center"></p>
          <p
            class="border border-gray-300 bg-green-500 text-white w-full h-full leading-8 text-center"
          >
            E2
          </p>
          <p
            class="border border-gray-300 bg-green-500 text-white w-full h-full leading-8 text-center"
          >
            E3
          </p>
        </div>
        <!-- F -->
        <div class="grid grid-cols-5 gap-x-2 mx-1 md:mx-2">
          <p
            class="border border-gray-300 w-full h-full leading-8 text-center"
          >
            F
          </p>
          <p
            class="border border-gray-300 bg-green-500 text-white w-full h-full leading-8 text-center"
          >
            F1
          </p>
          <p class="w-full h-full leading-8 text-center"></p>
          <p
            class="border border-gray-300 bg-green-500 text-white w-full h-full leading-8 text-center"
          >
            F2
          </p>
          <p
            class="border border-gray-300 bg-green-500 text-white w-full h-full leading-8 text-center"
          >
            F3
          </p>
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
              class="flex justify-between w-[300px] border border-gray-300 px-3 py-2 items-center space-x-2"
            >
              <p class="text-xl">A1</p>
              <button
                class="px-3 py-1 rounded-full border border-red-500"
                type="button"
              >
                x
              </button>
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
  const eachBusSeat = document.querySelector(`.SeatsBus-${e.target.name}`);
  const openOrCloseViews = document.querySelector(
    `.viewSeatsButton-${e.target.name}`
  );
  if (eachBusSeat.classList.contains("hidden")) {
    eachBusSeat.classList.remove("hidden");
    openOrCloseViews.innerText = "Close Seats";
  } else {
    eachBusSeat.classList.add("hidden");
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
