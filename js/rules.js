$(document).ready(function(){
	var w = $(window).innerWidth()
	
	/* ACORDION */
	$('.acordionList li').click(function(){
		if ($(this).hasClass('active')){
			$(this).removeClass('active')
		} else {
			$('.acordionList li').removeClass('active')
			$(this).addClass('active')
		}
	})
});

