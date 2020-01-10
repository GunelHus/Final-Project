$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: false,
	autoplay: true,
	responsive: {
		0: {
            items: 2
            
		},
		600: {
			items: 2
		},
		1000: {
			items: 2
		}
	}
});

$(function(){
	$(window).on('scroll',function(){
var scroll =$(window).scrollTop();
if(scroll<170){
$(".header").removeClass("sticky");
$(".header").removeClass("animated");
}else{
	$(".header").addClass("sticky");
	$(".header").addClass("animated");
	
}
	});
});
