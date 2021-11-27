$(document).ready(function(){
	$('.slider__conteiner').slick({
		arrows:true,
		dots:false,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:1800,
		responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
	$('.header__burger').click(function(event) {
		
		$(".header__burger, .heder__menu-nav, .heder__menu-ul").toggleClass('active');
		$('body').toggleClass('lock');
	});
});

