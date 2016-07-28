;jQuery(function($){
	var $movimg = $('.moving-img');
	//console.log($movimg);
	var $minArea = $('.min_area');
	//console.log($minArea);
	var $maxArea = $('.max_area');
	//console.log($maxArea);
	var $maxImg = $maxArea.find('img');
	//console.log($maxImg);
	var $contentimg = $('.content-img');
	var conerx;
	var conery;
	//获取中图区的坐标值
	var centerleft = $movimg.offset().left;
	var centertop = $movimg.offset().top;
	$contentimg.mouseenter(function(e){
		goodsMerror(e,centerleft,centertop);
		$minArea.show();
		$maxArea.css({'top':conery,'left':conerx}).show().stop().animate({'width':200,'height':200,'top':8,'left':380});
		$contentimg.mousemove(function(e){
			goodsMerror(e,centerleft,centertop);
		   $minArea.css({left:conerx,top:conery});
		 	$maxImg.css({left:-conerx*2,top:-conery*2})
			e.stopPropagation();
		});
	}).mouseleave(function(){
		$minArea.hide();
		$maxArea.animate({'width':100,'height':100,'top':conery,'left':conerx},function(){
			$maxArea.hide();
		});
	});
	//--------------放大镜的冒泡处理-----------------
	$maxImg.on("mousemove mouseover",function(e){
		e.stopPropagation();
	})
	//----------放大镜坐标设置函数-------------------
	function goodsMerror(e,centerleft,centertop){
		conerx= e.clientX-centerleft+$(window).scrollLeft()-50;
		conery= e.clientY-centertop+$(window).scrollTop()-50;
	   if(conerx>$movimg.width()-$minArea.width()){
		   conerx=$movimg.width()-$minArea.width();
		}
	   if(conery>$movimg.height()-$minArea.height()){
		   conery=$movimg.height()-$minArea.height();
		}
	   if(conerx<0){
		   conerx=0;
		}
	   if(conery<0){
		   conery=0;
		}
	}
});