$(document).ready(function(){
	$('.slider_1').slick({
		arrows:false,
		dots:false,
		slidesToShow:3,
        slidesToScroll: 2,
		autoplay:true,
		speed:6500,
		autoplaySpeed:1,
		pauseOnHover:false,
		infinite:true,
        cssEase: 'linear',
		swipe: false,
		draggable:false,
		
	});
	$('.slider_2').slick({
		arrows:false,
		dots:false,
		slidesToShow:3,
        slidesToScroll: 2,
		autoplay:true,
		speed:7500,
		autoplaySpeed:1,
		pauseOnHover:false,
		infinite:true,
        cssEase: 'linear',
		swipe: false,
		draggable:false,
		rtl: true,

	});
});