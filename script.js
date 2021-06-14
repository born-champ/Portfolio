$(document).ready(function(){
	$(window).ready(function(){
		if(this.scrollY > 20){
			$('.navbar').addclass("sticky");
		}else{
			$('.navbar').removeclass("sticky");

		}
		if (this.scroll > 500) {
			$('.scroll-up-btn').addclass("show");

		}else{
			$('.scroll-up-btn').removeclass("show");

		}
	});
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0});
	});

	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");




	});



});

