;jQuery(function(){
	$(".morechose").on("click",function(){
		var $d=$(".dd-div");
		var $checkmore=$(".check-more");
		$checkmore.toggle();
		$d.find("a").toggle();
		return false;
	})
});