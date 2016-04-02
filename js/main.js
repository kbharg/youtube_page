function postComment() {
	$('.post').on('click', function() {
		console.log('post');
	};
}

$(document).ready(function() {
	bool = false; //true means it's longer, need to show less on click

	$('.biggie').css('height','-=178');
	// $('.biggie').animate({height:'-=178'});
	$('.smallsText').text('Show More');

	$('.smalls').on('click', function() {
		if (bool) {
			bool = false;
			$('.biggie').animate({height:'-=178'});
			$('.smallsText').text('Show More');
		} else {
			bool = true;
			$('.biggie').animate({height:'+=178'});
			$('.smallsText').text('Show Less');
		}
	})


	$('.like').on('click', function() {
		$(this).addClass('likedVideo');
		$(this).siblings().removeClass('dislikedVideo');
	})
	$('.dislike').on('click', function() {
		$(this).addClass('dislikedVideo');
		$(this).siblings().removeClass('likedVideo');
	})
})