$(document).ready(function() {
	var defaults = {
	containerID: 'toTop', // fading element id
	containerHoverID: 'toTopHover', // fading element hover id
	scrollSpeed: 1200,
	easingType: 'linear'
	};

	$('body').flipLightBox()
	$('body').flipLightBox({ 
		lightbox_flip_speed:1000,
		lightbox_border_color: '#666666' 
	});

	$('a[href^="#"]').click(function() {
		elementClick = $(this).attr('href');
		destination = $(elementClick).offset().top;
		$('html,body').animate( { scrollTop:destination}, 1000);
	});

	$().UItoTop({ easingType: 'easeOutQuart' });
});