var swiper = new Swiper(".mySwiper", {
  lazy: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
  },
});

const hamburgerMenu = () => {
  const hamburger = document.querySelector(".hamburger");
  if (hamburger.classList.contains("hidden")) {
    hamburger.classList.remove("hidden");
  } else {
    hamburger.classList.add("hidden");
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

const getData = () => {};
