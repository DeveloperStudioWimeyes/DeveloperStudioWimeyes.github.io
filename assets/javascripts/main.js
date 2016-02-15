jQuery(document).ready(function($) {
	var deviceHeight = $(window).height();
	$(".screenBackgr").css("height", deviceHeight + "px");
	$("#map").css("height", deviceHeight/1.5 +"px");
});
jQuery(document).ready(function($) {
      $("#carousel-id").swiperight(function() {  
           $("#carousel-id").carousel('prev');  
         });  
        $("#carousel-id").swipeleft(function() {  
           $("#carousel-id").carousel('next');  
        });    
    });
$(document).ready(function() {
	initMap();
	$('ul').mousedown(function (event) { event.preventDefault();});
	$('button').mousedown(function(event) {
		/* Act on the event */
		$(this).css('background', 'transparent!important');
	});
	$(".nav.navbar-nav a").on('click', function(event){

	  // Prevent default anchor click behavior
	  event.preventDefault();

	  // Store hash (#)
	  var hash = this.hash;

	  // Using jQuery's animate() method to add smooth page scroll
	  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
	  $('html, body').animate({
	    scrollTop: $(hash).offset().top
	  }, 800, function(){

	    // Add hash (#) to URL when done scrolling (default click behavior)
	    window.location.hash = hash;
	  });
	});
	$(".nav.navbar-nav a").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).children('span').css({
			'border-bottom': '1px solid',
			'padding-bottom': '10px'
		});
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).children('span').css({
			'border-bottom': 'none',
			'padding-bottom': '10px'
		});
	});
	$('.savedata_modal').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		
		if (!$('#openModal form')[0].checkValidity()) {
		  $('#openModal form')[0].reportValidity();
		}
		else{
		
		$.ajax({
			url: 'savedata.php',
			type: 'POST',
			dataType: 'json',
			data: {
				'name': $('#name_modal').val(),
				'email': $('#email_modal').val(),
				'phone': $('#phone_modal').val()

			},
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
			$('.thanks').toggle();
			$('#openModal input').each(function(el){$(this).val('')});
			setTimeout(function(){ $('.thanks').toggle(); }, 3000);
		});
		}
	});
	$('.savedata_bottom').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('.thanks').toggle();

		$.ajax({
			url: 'savedata.php',
			type: 'POST',
			dataType: 'json',
			data: {
				'name': $('#name_bottom').val(),
				'email': $('#email_bottom').val(),
				'phone': $('#phone_bottom').val(),
				'txt': $('#txt_bottom').val()

			},
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete2");

			$('#openModal input').each(function(el){$(this).val('')});
			window.location = "#openModal";

			setTimeout(function(){ window.location = "#close"; }, 3000);
			
		});
		setTimeout(function(){ $('.thanks').toggle(); }, 4000);
	});
});
function debug(){
	$('#debug').toggle();
}
$('#showmap').click(function(event) {
	$('#contact').hide();
	$('#contact_back').show();
	$('#map').css('z-index',10);
	var customMapType = new google.maps.StyledMapType([
	  {
	    stylers: [
	      { saturation: -100 },
	      { gamma: 0.6 },
	      { lightness: 55 }
	    ]
	  },  
	  
	  ]);
	var customMapTypeId = 'custom_style';

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: {lat: 52.604011, lng: 39.592747},  
          mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
          },
           disableDefaultUI: true
        });

        map.mapTypes.set(customMapTypeId, customMapType);
        map.setMapTypeId(customMapTypeId);
        var marker = new google.maps.Marker({
            position: {lat: 52.604011, lng: 39.592747},
            icon: "assets/images/2D0CC2C0-F411-4963-B250-2E8766F50054@1x.png",
            map: map
          });

});