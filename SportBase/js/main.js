const indicator = document.querySelector(".nav-indicator");
const items = document.querySelectorAll(".nav-item");

function handleIndicator(el) {
	items.forEach(item => {
		item.classList.remove("is-active");
		item.removeAttribute("style");
	});

	indicator.style.width = `${el.offsetWidth}px`;
	indicator.style.left = `${el.offsetLeft}px`;

	el.classList.add("is-active");
	el.style.color = el.getAttribute("active-color");
}

items.forEach((item, index) => {
	item.addEventListener("mouseenter", e => {
		handleIndicator(e.target);
	});
	item.classList.contains("is-active") && handleIndicator(item);
});




// слайдеры  главная
document.addEventListener("DOMContentLoaded", function(event)
{
	window.onload = function () {
		 resize_info();
	}

	window.onresize = function () {
        resize_info();
	};
});

function resize_info() {
	// элементы для главной страницы
	var line = $('.main-screen').find('.line'),
		button = $('.main-screen').find('.button'),
		slider = $('.main-screen').find('.main-screen__slider'),
		// элементы для каталога объектов
		sorting_objects = $('.objects-content').find('.sorting__select'),
		button_filters = $('.objects-content').find('.filter-button');

	if (document.documentElement.clientWidth <= 1200) {
		
		line.before(slider);
		button.after(line);
	}

	if (document.documentElement.clientWidth <= 1024) {
		$('.filters').find('.filter-button').find('input').attr('checked', false);
		$('.filters').find('.filters-block').removeClass('show');
	}

	if (document.documentElement.clientWidth <= 768) {
		button_filters.after(sorting_objects);
	}
}



// слайдеры - главная страница
// if(document.documentElement.clientWidth <= 425){
// 	try{
// 		var sliderObjects = new Swiper("#objectsSlider", {
// 			slidesPerView: 1,
// 			spaceBetween: 30,
// 			loop: false,
// 			pagination: {
// 				el: ".swiper-pagination",
// 				clickable: true,
// 			},
// 			// Navigation arrows
// 			navigation: {
// 				nextEl: '.swiper-button-next',
// 				prevEl: '.swiper-button-prev',
// 			}
// 		});
// 	}
// 	catch{

// 	}
// } else {
// 	try{
// 		var sliderObjects = new Swiper("#objectsSlider", {
// 			slidesPerView: 4,
// 			spaceBetween: 30,
// 			loop: false,
// 			pagination: {
// 				el: ".swiper-pagination",
// 				clickable: true,
// 			},
// 			// Navigation arrows
// 			navigation: {
// 				nextEl: '.swiper-button-next',
// 				prevEl: '.swiper-button-prev',
// 			}
// 		});
// 	}
// 	catch{

// 	}
// }

try{
	initSliderObjects();

	var sliderPartners = new Swiper("#partnersSlider", {
		pagination: {
			el: ".swiper-pagination",
		},
		loop: true,
		//Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
}
catch(e){
	console.log(e)
}

function initSliderObjects() {
	var sliderObjects;

	if(document.documentElement.clientWidth <= 425){

		sliderObjects = new Swiper("#objectsSlider", {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: false,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		});
	} else if (document.documentElement.clientWidth <= 768){
		sliderObjects = new Swiper("#objectsSlider", {
			slidesPerView: 2,
			spaceBetween: 20,
			loop: false,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		});
	} else if (document.documentElement.clientWidth <= 1024){
		sliderObjects = new Swiper("#objectsSlider", {
			slidesPerView: 3,
			spaceBetween: 20,
			loop: false,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		});
	} else {
		sliderObjects = new Swiper("#objectsSlider", {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: false,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		});
	}
}	

// слайдеры - END










//        ------ObjectCard------
//owl-carousel (jq) 


try {
	$(function () {
		//Слайдер
		var owl = $(".carouselObjectCard__owl-carousel");
		owl.owlCarousel({
			nav: true,
			items: 1,
			loop: true,
			dots: true,
			margin: 10,
			responsive: {
				991: {
					items: 8,
				}
			}
		});
		var currentImage = (($(".owl-item.active")[0]).childNodes[0]);
		$("#carouselMainImage").attr("src", currentImage.src);
		owl.on('changed.owl.carousel', function (event) {
			var currentImage = (($(".owl-item.active")[0]).childNodes[0]);
			$("#carouselMainImage").attr("src", currentImage.src);
		})
		var anotherObjects_owl = $(".anotherObjects__owl");
		anotherObjects_owl.owlCarousel({
			nav: true,
			items: 4,
			loop: true,
			dots: false,
			margin: 20,
		});


		$(function () {
			//Слайдер
			var owl = $(".carouselObjectCard__owl-carousel");
			owl.owlCarousel({
				nav: true,
				items: 1,
				loop: true,
				dots: true,
				margin: 10,
				responsive: {
					991: {
						items: 8,
					}
				}
			});

			var currentImage = (($(".owl-item.active")[0]).childNodes[0]);
			$("#carouselMainImage").attr("src", currentImage.src);
			owl.on('changed.owl.carousel', function (event) {
				var currentImage = (($(".owl-item.active")[0]).childNodes[0]);
				$("#carouselMainImage").attr("src", currentImage.src);
			})
			var anotherObjects_owl = $(".anotherObjects__owl");
			anotherObjects_owl.owlCarousel({
				nav: true,
				items: 4,
				loop: true,
				dots: false,
				margin: 20,
			});
		});
	});

	//Меню informationBlocks  Desktop

	var btnContainer = document.querySelector(".informationBlocks__button");
	var informationBlocks = document.querySelector(".informationBlocks__content")
	var btns = btnContainer.querySelectorAll("button");

	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function () {
			var current = btnContainer.querySelector(".active");
			var currentBlock = informationBlocks.querySelector("#" + current.name)
			currentBlock.className = currentBlock.className.replace(" d-lg-block", " d-lg-none");

			current.className = current.className.replace(" active", "");
			this.className += " active";

			var nextBlock = informationBlocks.querySelector("#" + this.name)
			nextBlock.className = nextBlock.className.replace(" d-lg-none", "  d-lg-block");


		});
	}
} catch (e) {
	console.log(e)
}

//        ------CompareObjects------
try {
	$(function () {
			var compareObjects_owl = $(".compareObjects_owl");
			compareObjects_owl.owlCarousel({
					nav: true,
					items: 1,
					loop: true,
					dots: true,
					margin: 10,
					slideBy: 3,
					center: true,
					responsive: {
						991: {
							items: 3,
							margin: 30,
							dots: false,
							nav: false,

						}
					}});

				dotsCopy = compareObjects_owl.children(".owl-dots").clone();
				var navButtons = compareObjects_owl.children(".owl-nav").clone(); navButtons.appendTo(compareObjects_owl); dotsCopy.appendTo(compareObjects_owl);


				compareObjects_owl.on('changed.owl.carousel', function (event) {
					var dotsOriginal = compareObjects_owl.children(".owl-dots").clone();
					dotsCopy = compareObjects_owl.children(".owl-dots")[1];
					dotsCopy.replaceWith(dotsOriginal[0]);

				})

				navButtons.on('click', function (event) {
					if (event.target.className == "owl-next") {

						compareObjects_owl.trigger('next.owl.carousel');
					} else if (event.target.className == "owl-prev") {

						compareObjects_owl.trigger('prev.owl.carousel');
					}
				});

				compareObjects_owl.on('click', function (event) {
					click = event.target.closest("button");
					if (click.className == "owl-dot") {
						var index = compareObjects_owl.children(".owl-dots").children(".owl-dot").index(click);
						compareObjects_owl.trigger('to.owl.carousel', index);
					}

				});


			})
	}
	catch (e) {
		console.log(e)
	}

	//        ------TargetCatalog------
	try {
		// Смена текста в выпадающем списке
		$(".content__tenderCatalog .dropdown-item").on(("click"), function (event) {
			var parent = this.closest(".dropdown");

			$(parent).children(".dropdown-toggle")[0].innerText = $(this)[0].innerText;
			$(parent).children(".dropdown-toggle").css('color', '#6283E5');
		})
		// Открытие меню фильтров в мобильной версии

		$(".content__tenderCatalog .filters__Menu__trigger").on(("click"), function (event) {
			var parent = this.closest(".filters__Menu");

			if ($(parent).closest(".filters__Menu").hasClass("show")) {
				parent.className = parent.className.replace(" show", "");
				$(".products ")[0].className = $(".products")[0].className.replace(" show", "");

			} else {

				parent.classList += " show";
				$(".products ")[0].className += " show";

			}

		})

	} catch (e) {
		console.log(e)
	}


	



