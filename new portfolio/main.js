/* -   --   -NAVIGATION BAR FUNCTION --   ----   --*/
   

  function toggleMenu() {
    var menu = document.getElementById("myNavMenu");
    menu.classList.toggle("show");
}
  /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
 

/* -   --   -next and pervious button functio code  --   ----   --*/

let currentSlide = 0;

function moveSlide(forward) {
    const slider = document.querySelector('.slider');
    const totalBoxes = document.querySelectorAll('.box').length;
    const boxesToShow = 3;
    const boxWidth = document.querySelector('.box').clientWidth;

    currentSlide += forward;

    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide > totalBoxes / boxesToShow - 1) {
        currentSlide = Math.floor(totalBoxes / boxesToShow) - 1;
    }

    const translateXValue = -currentSlide * boxWidth * boxesToShow;
    slider.style.transform = `translateX(${translateXValue}px)`;
}
function moveSlide1(forward) {
    const slider = document.querySelector('.slider');
    const totalBoxes = document.querySelectorAll('.box').length;
    const boxesToShow = 3;
    const boxWidth = document.querySelector('.box').clientWidth;

    currentSlide -= forward;

    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide > totalBoxes / boxesToShow - 1) {
        currentSlide = Math.floor(totalBoxes / boxesToShow) - 1;
    }

    const translateXValue = -currentSlide * boxWidth * boxesToShow;
    slider.style.transform = `translateX(${translateXValue}px)`;
}

/* -   --   -NAVIGATION BAR FUNCTION --   ----   --*/
document.addEventListener("DOMContentLoaded", function() {
    // Scroll to the 'home' section on page load
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

/* -   --   -message send me button FUNCTION --   ----   --*/
function showSuccessMessage() {
    document.getElementById('successMessage').style.display = 'block';
}
/* -   --   -NAVIGATION BAR FUNCTION --   ----   --*/

/* -   --   -NAVIGATION BAR FUNCTION --   ----   --*/