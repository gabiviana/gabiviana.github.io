
  /*-----------------------------------------------------------------------------------*/
  /*  00. LOAD FONTS
  /*-----------------------------------------------------------------------------------*/


  WebFontConfig = {
    google: { families: [ 'Playfair+Display::latin,latin-ext', 'Open+Sans:400,300,600,700:latin,latin-ext' ] }
  };
  (function loadWebFonts() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

  /*-----------------------------------------------------------------------------------*/
  /*	02. NAVBAR STICKY + SELECTED
  /*-----------------------------------------------------------------------------------*/

  var cbpAnimatedHeader = (function cbpAnimatedHeader() {
  	var docElem = document.documentElement,
  		header = document.querySelector( '.cbp-af-header' ),
  		didScroll = false,
  		changeHeaderOn = 10;

  	function init() {
  		window.addEventListener( 'scroll', function( event ) {
  			if( !didScroll ) {
  				didScroll = true;
  				setTimeout( scrollPage, 100 );
  			}
  		}, false );
  	}

  	function scrollPage() {
  		var sy = scrollY();
  		if ( sy >= changeHeaderOn ) {
  			classie.add( header, 'cbp-af-header-shrink' );
  		}
  		else {
  			classie.remove( header, 'cbp-af-header-shrink' );
  		}
  		didScroll = false;
  	}

  	function scrollY() {
  		return window.pageYOffset || docElem.scrollTop;
  	}
  	init();
  })();

	var sections = $("section");
	var navigation_links = $("nav a");

	sections.waypoint({
		handler: function(event, direction) {

			var active_section;
			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
			navigation_links.removeClass("selected");
			active_link.addClass("selected");

		},
		offset: '30'
	})


  /*-----------------------------------------------------------------------------------*/
  /*	03. SMOOTH SCROLLING
  /*-----------------------------------------------------------------------------------*/

$(document).ready(function prepareSmoothScrolling() {
  $('nav a, .buttongo a').click(function(e){
      $('html,body').scrollTo(this.hash,this.hash);
      e.preventDefault();
  });
});

  /*-----------------------------------------------------------------------------------*/
  /*	04. ISOTOPE PROJECTS & FILTERS
  /*-----------------------------------------------------------------------------------*/

  /*
  jQuery(document).ready(function ($) {
      var $container = $('#projects_grid .items');

      $container.imagesLoaded(function () {
          $container.isotope({
              itemSelector: '.item',
              layoutMode: 'fitRows',
              filter: '*'
          });
      });

      $('.filter li a').click(function () {

          $('.filter li a').removeClass('active');
          $(this).addClass('active');

          var selector = $(this).attr('data-filter');
          $container.isotope({
              filter: selector
          });

          return false;
      });
  });
  */

  /*-----------------------------------------------------------------------------------*/
  /*	05. PROJECTS PORTFOLIO HOVER
  /*-----------------------------------------------------------------------------------*/

$(document).ready(function prepareHoverdir() {
  $('.items > li, .frame > a').each(function () {
      $(this).hoverdir();
  });
});

  /*-----------------------------------------------------------------------------------*/
  /*	06. RESPONSIVE MENU
  /*-----------------------------------------------------------------------------------*/

$(document).ready(function prepareCollapseMenu() {
	$("#collapse").hide();
	$("#collapse-menu").on("click", function (event) {
	    $("#collapse").slideToggle(300);
      event.preventDefault();
	}, function (event) {
	    $("#collapse").slideToggle(300);
	    event.preventDefault();
	});
});
