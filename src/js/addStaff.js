const reload = () => {
  location.reload();
};

// Modal

const submitModal = document.getElementById("submitModal");

const submitData = () => {
  if (submitModal.classList.contains("hidden")) {
    window.scrollTo(0, 0);
    submitModal.classList.remove("hidden");
  } else {
    submitModal.classList.add("hidden");
  }
};
const removeModal = () => {
  submitModal.classList.add("hidden");
};

const submit_form = () => {
  console.log("submits form");
};
