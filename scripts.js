//Here is the different carousel slide sections for individual languages
let pancakes = document.getElementById("pancakes");
let roast = document.getElementById("roast");
let burger = document.getElementById("burger");
let brownie = document.getElementById("brownie");
let carouselItems = [pancakes, roast, burger, brownie];

//Here are the circle numbers
let circle1 = document.getElementById("circle1");
let circle2 = document.getElementById("circle2");
let circle3 = document.getElementById("circle3");
let circle4 = document.getElementById("circle4");
let circles = [circle1, circle2, circle3, circle4];

//This changes the slide when a user clicks on a different navigation circle under the carousel

//For each circle in the array an event listener is added so that once it is clicked it will change the circle classes so the clicked circle is selected.
circles.forEach(circleEventL)

function circleEventL() {
    for (let i = 0; i < circles.length; i++){
        circles[i].addEventListener("click", function changeCarousel(ev){
            let currentSlide = document.querySelector(".currentCarouselImage");
            let targetCircle = ev.target;
            let currentCircle = document.querySelector(".currentCircle"); 
            currentSlide.classList.remove("currentCarouselImage");
            currentCircle.classList.remove("currentCircle");
            targetCircle.classList.add("currentCircle");

            let targetCircleId = targetCircle.id

            //The below switch uses the target circles ID to see what one it matches and then the carousel display changes along with the circle selected.
            switch(targetCircleId) {
                case "circle1":
                    pancakes.classList.add("currentCarouselImage");
                    break;
                case "circle2":
                    roast.classList.add("currentCarouselImage");;
                    break;
                case "circle3":
                    burger.classList.add("currentCarouselImage");;
                    break;
                case "circle4":
                    brownie.classList.add("currentCarouselImage");;
                    break;
            }
        })
    }
}

function moveCarousel(){
    let currentSlide = document.querySelector(".currentCarouselImage");
    let nextSlide = currentSlide.nextElementSibling;

    currentSlide.classList.remove("currentCarouselImage");

    //Once all elements are displayed there is no nextElementSibling to grab so this re-assigns the next slide so it does not result in an error.
    if (nextSlide === null) { 
        nextSlide = carouselItems[0];
        nextSlide.classList.add("currentCarouselImage");
    } else {
        nextSlide.classList.add("currentCarouselImage");
    }

    //The below is the code to move the circles with the slides
    let currentCircle = document.querySelector(".currentCircle"); 
    let nextCircle = currentCircle.nextElementSibling;

    currentCircle.classList.remove("currentCircle");

    if (nextCircle === null) {
        nextCircle = document.querySelector(".carouselNav").firstElementChild;
        nextCircle.classList.add("currentCircle");
    } else {
        nextCircle.classList.add("currentCircle");
    }
}

function start(){
    setInterval(moveCarousel, 3000);
}

start();