let arrow = Array.from(document.querySelectorAll(".slider__arrow"));
let arrowRight = arrow[1];
let arrowLeft = arrow[0];
let slides = Array.from(document.querySelectorAll(".slider__item"));

let slideInd = 0;

arrowRight.onclick = function () {
	slideInd++;
	for (let item of slides) {
		item.classList.remove("slider__item_active");
	}
	if (slideInd >= slides.length) {
		slideInd = 0;
	}
	slides[slideInd].classList.add("slider__item_active");
};

arrowLeft.onclick = function () {
	slideInd--;
	for (let item of slides) {
		item.classList.remove("slider__item_active");
	}
	if (slideInd < 0) {
		slideInd = slides.length - 1;
	}
	slides[slideInd].classList.add("slider__item_active");
};


