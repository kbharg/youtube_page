function postComment() {
	$('.post').on('click', function() {
		if (checkTextArea()) {
			$('#comments').append(makeComment());
		}
	})
}
function makeComment() {
	return '<div class="comment"><div class="image"><img src="img/me.jpg" alt=""></div><div class="commentRight"><div class="nameRow"><a href="#">OscarMike369</a><span>Now</span></div><div class="content">'+document.getElementById('postComment').value+'</div><div class="replyRow"><span class="replyButton">Reply</span><div class="i"><i class="fa fa-circle"></i></div><span class="likeCount">0</span><span class="like likedislike"><i class="fa fa-thumbs-up"></i></span><span class="dislike likedislike"><i class="fa fa-thumbs-down"></i></span></div></div></div>';
}
function checkTextArea() {
	if (document.getElementById('postComment').value) {
		return true;
	} else {
		return false;
	}
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
		$(this).toggleClass('likedVideo');
		$(this).siblings().removeClass('dislikedVideo');
	})
	$('.dislike').on('click', function() {
		$(this).toggleClass('dislikedVideo');
		$(this).siblings().removeClass('likedVideo');
	})

	postComment();
})