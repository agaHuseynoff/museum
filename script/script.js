/**************************
 *owl-carousel
 **************************/
var owlCarousel = $('.owl-carousel');

for (var i = 0; i < $(owlCarousel).length; i++) {
	$(owlCarousel[0]).owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});

	$(owlCarousel[1]).owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1000: {
				items: 2
			}
		}
	});

	$(owlCarousel[2]).owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			767: {
				items: 3
			},
			992: {
				items: 2
			},
			1198: {
				items: 3
			}


		}
	});
}

/*****************************
 *isotope
 *****************************/
var $grid = $('.grid').isotope({

});

$('.filter-button-group').on('click', 'a', function (e) {
	e.preventDefault();
	var target = $(this),
		filterValue = target.data('filter');

	if (!target.hasClass("filter-active")) {
		$('.categories').find('.filter-active').removeClass('filter-active');
		target.addClass('filter-active');

	}
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({
		filter: filterValue
	});
});


/*****************************
 *navbar-search
 ******************************/
$('.search-nav .search').on('click', function () {
	$('.search-nav .form-control').addClass('actived');
	$('.search-nav .form-control').animate({
		width: 85 + '%',
		opacity: 1
	}, 300);
});


/***************************
 *Dropdown
 ***************************/
var li = $('.side-bar-part ul li span');

for (var i = 0; i < li.length; i++) {
	$(li[i]).click(function () {
		var openCategor = $(this).next();
		var icon = $(this).prev();
		$(openCategor).slideToggle({
			display: 'block'
		});
		$(icon).toggleClass('rotate');
	});
}


/***************************
 *Preloader
 ****************************/
$(window).on('load', function () {
	setTimeout(function () {
		$('.load-overlay').animate({
			opacity: '0'
		}, 1000, function () {
			$('.load-overlay').remove();
			$('body').css({
				overflow: 'visible'
			})
		});
	}, 100);
});

/****************************
 *Up
 *****************************/
function up() {
	var posy = $(window).scrollTop();
	if (posy > $('main').offset().top) {
		$('.circle').fadeIn();
	}else{
		$('.circle').fadeOut();
	}

}


$("a[href^='.']").click(function (e) {
	e.preventDefault();

	var elemOffTop = $($(this).attr("href")).offset().top;
	$("body, html").delay(200).animate({
		scrollTop: elemOffTop
	}, 1000);
});

$(window).scroll(function(){
	up();
})
