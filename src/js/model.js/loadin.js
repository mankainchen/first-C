;jQuery(function($){
	var $login=$(".login-box");
	var $resign=$(".resign-box");
	var $reuse=$("#reuse");
	var $loguse=$("#loguse");
	var $usermima=$(".usermima");
	var $checkCode=$(".check-code");
	var $checkPhone=$(".check-phone");
	var i=1;
	var value={};
	var phone;
	var phoneArr=[];
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
		$tip1=$(".tip1");
		var rule=/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
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
	$(".login-btn").on("click",function(){
		$tip1=$(".tip1");
		phone=$reuse.val();
		var psw=$usermima.val();
		var _cookie = document.cookie.split("; ");
		if(_cookie != ""){
			$.each(_cookie,function(index,val){
				//遍历cookie信息
				if(val.split('=')[0].split('-')[0].indexOf('username') != -1){
					var username=JSON.parse(val.split('=')[1]);
					var phone=username.phone;
					phoneArr.push(phone);
				}
			});
		}
		// 手机用户名重名验证
	 	//循环已注册手机号码的数组，判断输入的手机是否存在
	 	for(var i=0;i<phoneArr.length;i++){
	 		if(phone==phoneArr[i]){
	 			$tip1.css({
	 				"display":"block"
	 			})
	 			alert($tip);
	 			$tip1.html('此号码已被注册，请换个试试！');
	 			return false;
	 		}else{
	 			//不存在，则可以注册
	 			var reg=/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	 			if(!reg.test(phone)){
					$tip1.css("display","block");
					$tip1.html('请输入正确的手机号码');
					return false;
				};
	 		};
	 	};
		// 将注册的信息写入cookie中
		value.phone=phone;
		value.psw=psw;
		var num =0; 
		var _cookie0 = document.cookie.split('; ');
		if(_cookie0 != ''){
			$.each(_cookie0,function(index,val){
				if(val.split('=')[0].split('-')[0].indexOf('num') != -1){
					num = parseInt(val.split('=')[1]);
				}
			});
		}
		num++;
		//var _cookie1='user-'+num+'='+JSON.stringify(value);
		//document.cookie=_cookie1;
		//document.cookie='num='+ num + ';path=/';
		var exdate=new Date();
		exdate.setDate(exdate.getDate()+55);//加55天
		document.cookie ='user-'+num+"="+JSON.stringify(value);";expires="+exdate;
		console.log(_cookie);
		alert('恭喜注册成功！请登录');
		return location.href = 'login.html'; 
	});	
});