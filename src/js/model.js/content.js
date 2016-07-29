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
	//获取商品图的坐标值
	var centerleft = $movimg.offset().left;
	var centertop = $movimg.offset().top;
	//鼠标进入商品图时，动态显示隐藏的放大镜以及放大的图Div
	$contentimg.mouseenter(function(e){
		//获取放大镜坐标
		goodsMerror(e,centerleft,centertop);
		//显示放大镜
		$minArea.show();
		//放大的图Div
		$maxArea.css({'top':conery,'left':conerx}).show().stop().animate({'width':200,'height':200,'top':8,'left':380});
		//鼠标在商品图移动时，在放大的图区显示商品图相应的部位
		$contentimg.mousemove(function(e){
			//再次获取放大镜坐标
			goodsMerror(e,centerleft,centertop);
			//放大镜移动
		   $minArea.css({left:conerx,top:conery});
		   //放大镜移动时，放大的图DIV显示商品图相应的部位
		 	$maxImg.css({left:-conerx*2,top:-conery*2})
			e.stopPropagation();
		});
		//鼠标离开中图区
	}).mouseleave(function(){
		//放大镜隐藏
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