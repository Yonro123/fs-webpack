import Swiper, { Pagination, EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import "./styles/main.scss";

const swiper = new Swiper(".swiper", {
	modules: [Pagination, EffectCoverflow],
	effect: "coverflow",
	spaceBetween: 200,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 300,
		modifier: 1,
		slideShadows: true,
	},
	pagination: {
		el: ".swiper-pagination",
	},
});
