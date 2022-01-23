let arrow = Array.from(document.querySelectorAll(".slider__arrow"));
let arrowRight = arrow[1];
let arrowLeft = arrow[0];
let slides = Array.from(document.querySelectorAll(".slider__item"));

/*let slideInd = 0;

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
*/
function seachIndex (item) {
	 item.className.includes("slider__item slider__item_active");
}

arrowRight.onclick = function () {
	let positionStart = slides.findIndex(seachIndex);
	if (positionStart === -1) {
		return
	} else {
		slides[positionStart].classList.remove("slider__item_active");
	}
	if (positionStart = slides.length - 1) {
		positionStart = 0;
	} else {
		slides[(positionStart + 1)].classList.add("slider__item_active")
	}
}

arrowLeft.onclick = function () {
	let positionEnd = slides.findIndex(seachIndex);
	if (positionEnd === -1) {
		return
	} else {
		slides[positionEnd].classList.remove("slider__item_active");
	}
	if (positionEnd = 0) {
		positionEnd = slides.length -1;
	} else {
		slides[(positionEnd - 1)].classList.add("slider__item_active")
	}
}
