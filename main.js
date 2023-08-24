// select all images
let images = document.querySelectorAll('#images img');

// number of images
let lengthImages = images.length;

// index of images
let index = document.getElementById('index-images');

// current image slid
let currentSlide = 1;

// get current slide from local stoege
if (localStorage.getItem("currentSlide")) {
	currentSlide = localStorage.getItem("currentSlide");
}

// previous image
let previous = document.getElementById('prev');

// next image
let next = document.getElementById('next');

// handel click on previous and next
next.onclick = nextSlide;
previous.onclick = prevSlide;

// input value
let input = document.querySelector('input[type="number"]');

input.addEventListener("input", (event) => {
	// fix value of input
	if (input.value <= lengthImages) {
		currentSlide = input.value;
	}

	input.value <= lengthImages;

	theChecker();
});

// parent of li bullets (ul)
// let ulPagination = document.querySelector('.control').children[1];

// creat lists items based on the length of images
// for (let i = 1; i <= lengthImages; i++) {
// 	let listControl = document.createElement('li');
// 	let textList = document.createTextNode(i);

// 	// append text on li
// 	listControl.appendChild(textList);
// 	// append items on ul
// 	ulPagination.appendChild(listControl);
// }

// click on pagination and do event
// document.querySelectorAll('ul li').forEach((lis) => {
// 	lis.onclick = function () {
// 		currentSlide = parseInt(lis.textContent);
// 		theChecker();
// 	}
// });

// trigger the checker function 
theChecker();

// next slide function 
function nextSlide() {
	if (next.classList.contains("done")) {
		// do nothing
		return false;
	} else {
		currentSlide++;
		theChecker();
	}

	// add index to input
	input.value = +currentSlide;
}

// previous slide function 
function prevSlide() {
	if (previous.classList.contains("done")) {
		// do nothing
		return false;
	} else {
		currentSlide--;
		theChecker();
	}

	// add index to input
	input.value = +currentSlide;
}

// create the Checker Function 
function theChecker() {

	// add index number in top of slide
	index.innerHTML = `Slide #${currentSlide} of ${lengthImages}`;

	// remove all class actives 
	removeAllActives();

	// add class active on the current image
	images[currentSlide - 1].className = "active";

	// add class active on the current pagination
	// document.querySelectorAll('ul li')[currentSlide - 1].className = "active";	

}

// remove all class actives from images and pagination 
function removeAllActives() {
	
	// loop on images
	images.forEach((img) => {
		img.classList.remove("active");
	}); 

	// loop on ul lis
	// document.querySelectorAll('ul li').forEach((lis) => {
	// 	lis.classList.remove("active");
	// });

	// add index to input
	input.value = +currentSlide;

	// add class done to first and last pagination
	if (currentSlide == 1) {
		previous.classList.add("done");
	} else {
		previous.classList.remove("done");
	}

	if (currentSlide == lengthImages) {
		next.classList.add("done");
	} else {
		next.classList.remove("done");
	}

	// set curenet slide in local storage
	window.localStorage.setItem("currentSlide", currentSlide);
}

// ---change withe of imgae parent ----
let parentOfImages = document.querySelector('.slide-images .slider-screen');
images[1].style.height = window.getComputedStyle(images[0]).getPropertyValue("height");

for (let i = 0; i < lengthImages; i++) {
	let widthImage = window.getComputedStyle(images[i]).getPropertyValue("height");
	parentOfImages.style.height = `${widthImage}`;
}