;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		var $header = $('.header');
		var $burgerButton = $('.burger-menu');
		var $nav = $('.nav');

		$burgerButton.on('click', function(e) {
			e.preventDefault();

			$burgerButton.toggleClass('active');
			$nav.toggleClass('open');
		});


		if($win.width() < 768) {
			$('.animated').animated({
				animatedIn: 'animated-in',
				offset: 1,
				reverse: false,
				mobileDisabled: false
			});			
		} else {
			$('.animated').animated({
				animatedIn: 'animated-in',
				offset: 0.8,
				reverse: false,
				mobileDisabled: false
			});
		}

		$('.footer').animated({
			animatedIn: 'animated-in',
			offset: 0.9,
			reverse: false,
			mobileDisabled: false
		});

		$('.intro__link').on('click', function(e){
			var waypoint = $(this).attr('href');

			$('html, body').animate({
				scrollTop: $(waypoint).offset().top
			}, 700);

			e.preventDefault();
		});

		$win.on('scroll', function() {

			if($win.scrollTop() > 5) {
				$header.addClass('fixed');
			} else {
				$header.removeClass('fixed');
			}

		});
	});

})(jQuery, window, document);
