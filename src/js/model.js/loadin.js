;jQuery(function($){
	var $login=$(".login-box");
	var $resign=$(".resign-box");
	var $reuse=$("#reuse");
	var $loguse=$("#loguse");
	var $usermima=$(".usermima");
	var $checkCode=$(".check-code");
	var $checkPhone=$(".check-phone");
	var $tip1=$(".tip1");
	var i=1;
	//var value={};
	var phone;
	//var phoneArr=[];
	$(".login-tit-btn1").on("click",function(){
		$resign.show();
		$login.css({"display":"none"});
		return false;
	})
	$(".login-tit-btn2").on("click",function(){
		$resign.hide();
		$login.css({"display":"block"});
		return false;
	})
	
	$(".username").on("focus",function(){
		$(this).css({
			background:"url('../css/img/user2.png') no-repeat center left"
		});
	})
	.on("blur",function(){
		if($reuse.val()==""){
			phone=$loguse.val();
		}else{
			phone=$reuse.val();
		}
		//$tip1=$(".tip1");
		var rule=/^1\d{10}$/;
		if(phone==""){
			$tip1.css("display","block");
			$tip1.html("请输入手机号码");
		}else if(!rule.test(phone)){
			$tip1.css("display","block");
			$tip1.html("请输入正确的手机号码");
		}else{
			$tip1.css("display","none");
			//return phone;
		}
		$(this).css({
			background:"url('../css/img/user1.png') no-repeat center left"
		});
	});
	$usermima.on("focus",function(){
		$(this).css({
			background:"url('../css/img/mima2.png') no-repeat center left"
		});
	})
	.on("blur",function(){
			$(this).css({
			background:"url('../css/img/mima1.png') no-repeat center left"
		});
	});
	$(".form-span").on("click",function(){
		i=parseInt(Math.random()*10);
		console.log(i);
		$(this).css({
			background:"url('../css/img/yan"+i+".png')"
		});
		return false;
	})
	$checkCode.on("focus",function(){
		$(this).css({
			background:"url('../css/img/mima2.png') no-repeat center left"
		});
	})
	.on("blur",function(){
		var code=$checkCode.val();
		if(code!=i){
			$(".tip2").css("display","block");
			$(".tip2").html("验证码输入有误");
		}else{
			$(".tip2").css("display","none");
		}
		$(this).css({
			background:"url('../css/img/mima1.png') no-repeat center left"
		});
	});
	$checkPhone.on("focus",function(){
		$(this).css({
			background:"url('../css/img/phone2.png') no-repeat center left"
		});
	})
	.on("blur",function(){
			$(this).css({
			background:"url('../css/img/phone1.png') no-repeat center left"
		});
	});
	//cookie获取
	var cookies=document.cookie;
	console.log(cookies);
	var arr=cookies.split("; ");//注意要有空
	for(var i=0;i<arr.length;i++){
		arr[i]=arr[i].split("=")[1];
	}
	$(".username").on("blur",function(){
		if(arr[0]==phone){
 			$tip1.css({
 				"display":"block"
 			})
 			//alert($tip);
 			$tip1.html('此号码已被注册，请换个试试！');
 			//return false;
 		}else{
 			//不存在，则可以注册
 			var reg=/^1\d{10}$/;
 			if(!reg.test(phone)){
				$tip1.css("display","block");
				$tip1.html('请输入正确的手机号码');
				//return false;
			};
 		};
 	})
	$(".login-btn").on("click",function(){
		//写入cookie
		var name=$reuse;
		var password=$usermima;
		//var checkpassword;
		var state=0;
		state=0;
		var date=new Date();
		date.setDate(date.getDate()+30);
		addcookie("name",name.val(),date);
		addcookie("password",password.val(),date);
		alert("注册成功");
		console.log(document.cookie);
	//封装cookie操作函数
	//addcookie
		function addcookie(name,value,expires){
			var str=name+'='+value;
			if(expires){
				document.cookie=str+';expires='+expires;
			}else{
				document.cookie=str;
			}
		}	
		window.location.href = 'loadin.html'; 
	});	
});