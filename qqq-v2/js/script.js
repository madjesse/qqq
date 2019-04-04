$(function() {
//	slider settings-------------------------------------------------
	$(".slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: true
	});

//	scroll effects--------------------------------------------------
	$(".nav a, .inner-nav a").click(function(e) {
// 			make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// prevent default anchor click behavior
			event.preventDefault();
			// Store hash
			var hash = this.hash;
			// Using jQuery's animate() method to add smooth page scroll
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		}
	});
	
//	global nav actions--------------------------------------------
	$(".menu-btn-wrapper").click(function() {
//		show the menu button as an x
		$(this).children().each(function() {
			$(this).toggleClass("open");
		});
		$(".smartphone-nav").slideToggle(500);
	});
	$(".smartphone-nav .nav-item").click(function() {
		if($(".smartphone-nav").is(":animated")) {
			return;
		} else {
			$(".smartphone-nav").slideUp(500);
			$(".menu-btn-wrapper").children().each(function() {
				$(this).toggleClass("open");
			});
		}
	});
//	hide the smartphone nav and reset the menu button when window size is over the threshold
	$(window).resize(function() {
		if($(window).width() >= 768) {
			$(".smartphone-nav").css("display", "none");
			$(".menu-btn-wrapper").children().each(function() {
				$(this).removeClass("open");
			});
		}
		
	});
	
//	inner nav behaviour------------------------------------------------
//	get the buttons
	var $buttons = $(".service-accordion");
	$buttons.click(function() {
		$(this).next().slideToggle(500);
		$(this).toggleClass("up");
	});
	
});