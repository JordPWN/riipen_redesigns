$(function(){


	$(".expand_header").on("click", function(){
		// $(".more_info").toggleClass("hidden");
		$(".expand_info").toggleClass("expanded")
		if ($(".expand_info").hasClass("expanded")){
			$(".more_info").animate({height: 'toggle'})
			$(".expand_info").html('<h3><i class ="fa fa-chevron-up"></i> click to shrink <i class ="fa fa-chevron-up"></i></h3>')
		}else{
			$(".more_info").animate({height: 'toggle'})
			$(".expand_info").html('<h3><i class ="fa fa-chevron-down"></i> click to expand <i class ="fa fa-chevron-down"></i></h3>')
		}
	});

});