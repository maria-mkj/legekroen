



/* -----------------burger menu ---------------------*/
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
  });
/* -------------------burger menu -----------------------*/




// --------------------SLIDER START-------------------------

// Variables
const slide = document.querySelector('.slider-slide');
const btnPrevious = document.querySelector('.previous');

let currentImageIndex = 0;

// Array of images
let images = [
    'assets/img/slider1.jpg',
    'assets/img/slider2.jpg',
    'assets/img/slider3.jpg'
];

// Function to set the active slide
function setActiveSlide(index) {
    slide.src = images[index];
}

// Set the initial active slide
setActiveSlide(currentImageIndex);

// Function to navigate to the next image
function next() {
    // If at the last image, start from the first; otherwise, move to the next
    currentImageIndex = (currentImageIndex >= images.length - 1) ? 0 : currentImageIndex + 1;
    setActiveSlide(currentImageIndex);
}

// Run the next function every 4 seconds
setInterval(next, 4000);

// -------------------SLIDER END--------------------------



// ------------------Function to submit the form ------------------------
function submitForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var buyer = document.getElementById("buyer").value;

    if (fullName && email && buyer) {
        setTimeout(function () {
            document.getElementById("membershipForm").reset();
            document.getElementById("successMessage").style.display = "block";
            document.getElementById("errorMessage").style.display = "none";
        }, 1000);
    } else {
        document.getElementById("successMessage").style.display = "none";
        document.getElementById("errorMessage").style.display = "block";
    }
// ------------------Function to submit the form ------------------------
}