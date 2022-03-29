let boarding_point_time = document.getElementById('add_boarding_point')
let dropping_point_time = document.getElementById('add_dropping_point')

boarding_point_time.addEventListener('click', () => {
    document.getElementById('boarding_point_time').innerHTML+= `<div class=\"border-2 border-blue-500 rounded-md px-3 py-2\"><div class=\"mt-4 flex items-center\">
<label for="time" class=\"text-blue-700 text-xl font-bold \"
      >Add Boarding Location :
    </label>
    <input
      type="text"
      name=""
      id=""
      class=\"border-2 border-blue-700 rounded-md font-bold text-2xl mx-2 \"
    />
    <p class=\"text-red-600/90\">Example : Barguna</p>
  </div>
  <div class=\"flex items-center mt-4 py-2\">
              <label for="time" class=\"text-blue-700 text-xl font-bold\"
                >Add Boarding Time</label
              >
              <input
                type="time"
                name="time"
                id="time"
                class=\"font-bold text-2xl border-2 mx-2 px-2 border-blue-700 rounded-md\"
              />
              <p class=\"text-red-600/90\">Example : 6:00 pm</p>
            </div></div>`; 
})


dropping_point_time.addEventListener('click', () => {
    document.getElementById('dropping_point_time').innerHTML+= `<div class=\"border-2 border-blue-500 rounded-md px-3 py-2\"><div class=\"mt-4 flex items-center\">
<label for="time" class=\"text-blue-700 text-xl font-bold \"
      >Add Boarding Location :
    </label>
    <input
      type="text"
      name=""
      id=""
      class=\"border-2 border-blue-700 rounded-md font-bold text-2xl mx-2 \"
    />
    <p class=\"text-red-600/90\">Example : Barguna</p>
  </div>
  <div class=\"flex items-center mt-4 py-2\">
              <label for="time" class=\"text-blue-700 text-xl font-bold\"
                >Add Boarding Time</label
              >
              <input
                type="time"
                name="time"
                id="time"
                class=\"font-bold text-2xl border-2 mx-2 px-2 border-blue-700 rounded-md\"
              />
              <p class=\"text-red-600/90\">Example : 6:00 pm</p>
            </div></div>`; 
})

// Input

let selectedDays = []




const onClickHandler = (event) => {
   if (event.name !== 'all' && event.checked === true) {
       selectedDays.push(event.name)
       console.log(selectedDays)
   } else if (event.name !== 'all' && event.checked === false) {
    const filtered = selectedDays.filter(word => word !== event.name);
 selectedDays = [...filtered]
 console.log(selectedDays)
   } else if (event.name === 'all' && event.checked === true) {
       const inputs = document.getElementsByClassName('boarding_day_input')
       for (let i = 0 ; i < inputs.length ; i ++) {
           inputs[i].setAttribute('disabled', 'true')
       }
        selectedDays.splice(0, selectedDays.length)
       selectedDays.push('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday')
       console.log(selectedDays)
   } else if (event.name === 'all' && event.checked === false) {
    selectedDays.splice(0, selectedDays.length)
    const inputs = document.getElementsByClassName('boarding_day_input')
       for (let i = 0 ; i < inputs.length ; i ++) {
           inputs[i].removeAttribute('disabled', 'true')
       }
    console.log(selectedDays)
   }

}

