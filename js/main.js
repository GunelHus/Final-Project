$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: false,
	autoplay: true,
	responsiveClass:true,
	responsive: {
		0: {
            items: 1
            
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

let aHover = $(".li-dentist .dentist");
aHover.each(function(ind,val){
	$(val).click(function () {
		$(val).siblings().toggleClass("d-block");
		setTimeout(function () {
			$(val).siblings().css({ "opacity": "1" ,"height":"100%"});
		}, 50)

	});
	$(".li-dentist").click(function () {
		$(val).siblings().toggleClass("d-none");
		$(val).siblings().css({ "opacity": "0", "height": "0" })
	});
})

  // Side Navigation
  $(".menu-bars").click(function (event) {
	event.preventDefault();
	$(".toggle-section").css("display", "block");
	$(".toggle-menu").css("display", "block");
});
$(".times").click(function (event) {
	event.preventDefault();
	$(".toggle-section").css("display", "none");
	$(".toggle-menu").css("display", "none");
});