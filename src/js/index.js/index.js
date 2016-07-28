;jQuery(function(){
	//----------------------分类级联--------------------------
	var $banLi=$(".ban-li");
	$banLi.on("mouseover",function(){
		$(this).css({
			border:"1px solid #000",
			backgroundColor:"#fff",
			borderRight:"none",
			zIndex:10
		})
		$(this).find(".li-inside").css({
			display:"block",
			border:"1px solid #000",
			zIndex:-5
		})
		$(".run-ul").css({
			zIndex:-10
		})
	}).on("mouseleave",function(){
		$(this).find(".li-inside").css({
			display:"none",
			zIndex:10
		})
		$(this).css({
			background: "#e8e3eb",
			border:"none",
			zIndex:-5
		})
		$(".run-ul").css({
			zIndex:1
		})
	})
	//-------------------------轮播图------------------------------
	var $runLi=$(".run-li");
	//console.log($li);
	var $main=$(".run-ul");
	var leng=$runLi.length;
	//console.log(leng);
	var index=0;
	run();
	function run(){
		//console.log(leng);
		if(index>=leng){
        	index=0;
    	}else if(index < 0){
        	index = leng - 1;
    	}
    	$runLi.eq(index).siblings().hide();
    	//console.log(index);
    	$runLi.eq(index).show();
	}
	function animation(){
    	index++;
    	run();
	}
	var timer = setInterval(animation,2000);
    $main.on('mouseover',function(){
        clearInterval(timer);
    }).on('mouseleave',function(){
        timer = setInterval(animation,2000);
    });
    //------------------------加入购物车------------------------------
	var $li=$(".ul-1,.ul-2,.good,.say-good,.again,.heima").find("li");
	var $goodsCont=$(".goods-cont").val();
	$li.on("mouseenter",function(){
		$(this).css("box-shadow"," 0px 0px 20px pink");
		$("<div/>").addClass("borncar").appendTo($(this));
		$("<a href=''>加入购物车</a>").addClass("enjon").appendTo($(".borncar"));
		$(".enjon").css({
			color:"#fff",
			position:"absolute",
			top:"18px",
			left:"100px"
		});
		$(".borncar").css({
			position:"absolute",
			top:"200px",
			left:"0px",
			width:"283px",
			height:"50px",
			background:"#666",
			opacity:0.9,
			color:"#fff",
		})
		$(".enjon").on("click",function(e){
			var $fly=$(".oncar");
			console.log($fly);
			//var $goodsCont=$(".goods-cont").val();
			$("<div/>").addClass("run").appendTo($(this));
			//console.log(e.clientX);
			$(".run").css({
				width:"60px",
				height:"60px",
				position:"fixed",
				top:e.clientY,
				left:e.clientX,
				background:"#0f0",
				borderRadius:"30px",
			});
			//console.log($onCar.offset().top);
			console.log($fly.css("top"));
			$(".run").animate({
				left:$fly.offset().left,
				top:$fly.css("top")
				//top:"880px"

			},function(){
				$goodsCont++
				$(".goods-cont").html($goodsCont);
				$("<div/>").addClass("buying").appendTo($(".side-goods"));
				$(".buying").css({
					width:"280px",
					height:"80px",
					background:"#ff0"
				})
			});
			return false;
		})
	}).on("mouseleave",function(){
		$(this).css("box-shadow"," 0px 0px 20px #fff");
		$(".borncar").remove();
	})
	$(".again-li").on("mouseenter",function(){
		$(this).addClass("againFir");
		$(this).siblings().removeClass("againFir");
	})
	$(".again-ul").on("mouseleave",function(){
		$(".again1").addClass("againFir");
		$(".again1").siblings().removeClass("againFir");
	})
	//-----------------购物车展开---------------------
	$(".car-a").on("click",function(){
		$(".side-goods").toggle();
	})
});
