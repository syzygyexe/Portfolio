app.use(express.static(path.join(__dirname, "app/js")));
// ++++++++++++++++++++++++++++ TRANSPARENT NAV BACKGROUND +++++++++++++++++++
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector(".navbar").style.opacity = 0.9;
  } else {
    document.querySelector(".navbar").style.opacity = 1;
  }
});

// ++++++++++++++++++++++++++++ SMOOTH SCROLLING ++++++++++++++++++++++++++++
$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    let target = this.hash,
      $target = $(target);
    // Mobile smooth scrolling
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top - 60,
        },
        900,
        "swing",
        function () {
          null;
        }
      );
  });
});

// ++++++++++++++++++++++++++++ LEFT CAROUSEL ++++++++++++++++++++++++++++
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// ++++++++++++++++++++++++++++ RIGHT CAROUSEL ++++++++++++++++++++++++++++
let slideIndexRight = 1;
showSlidesRight(slideIndexRight);
// Next/previous controls
function plusSlidesRight(n) {
  showSlidesRight((slideIndexRight += n));
}

// Thumbnail image controls
function currentSlideRight(n) {
  showSlidesRight((slideIndexRight = n));
}

function showSlidesRight(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesRight");
  let dots = document.getElementsByClassName("dotRight");
  if (n > slides.length) {
    slideIndexRight = 1;
  }
  if (n < 1) {
    slideIndexRight = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexRight - 1].style.display = "block";
  dots[slideIndexRight - 1].className += " active";
}

// ++++++++++++++++++++++++++++ NAVBAR OPEN/CLOSE ++++++++++++++++++++++++++++
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navbarDropdownOpen = document.getElementsByClassName(
  "navbar-dropdown-open"
)[0];

// Open hamburger menu
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active-nav");
});

// Close hamburger menu after any click inside of the hamburger menu.
navbarDropdownOpen.addEventListener("click", () => {
  navbarLinks.classList.toggle("active-nav");
});

// Delete all hambgurger menu manipulations when resolution is <768 or >769.
$(window).resize(function () {
  let sWidth = $(window).width();
  if (sWidth > 768) {
    $(".navbar-links").removeClass("active-nav");
  }
});

$(function () {
  $(".toggle-button").click(
    function () {
      $(".left-slash").css("transform: rotate(45deg) translate(-0px, 13px)");
    },
    function () {
      // on mouseout, reset the background colour
      $("#b").css("background-color", "");
    }
  );
});
