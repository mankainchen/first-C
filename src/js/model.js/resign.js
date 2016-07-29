// JavaScript Document
;jQuery(function(){
	//登录用户的判断
	var $tip = $(".tip");
	var $tip5 = $(".tip5");
	var $tip3 = $(".tip3");
	var $loguse=$("#loguse");
	var $usermima=$("#logmima");
	var j=0;
	//登录按钮的值
	//var name=$loguse.val();
	//var password=$usermima.val();
	//cookie获取
	var cookies=document.cookie;
	//alert(cookies);
	var arr=cookies.split("; ");
	for(var i=0;i<arr.length;i++){
		arr[i]=arr[i].split("=")[1];
	}
	console.log(arr[0]);
	console.log(name);
//$('.resign-btn').on('click',function(){
	//判断用户是否已经注册
	$("#loguse").on("blur",function(){
		var name=$loguse.val();
		console.log("...");
		if(arr[0]!=name){
 			$tip5.css("display","block")
 			//alert($tip);
 			$tip5.html('用户名不存在，请注册！');
 			//return false;
 		}else{
 			$tip5.css("display","none");
 			//alert("存在");
 		}
 	}).on("focus",function(){
 		$tip5.css("display","none")
 	})		
 	//判断密码是否匹配正确
 	$usermima.on("blur",function(){
 			var password=$usermima.val();
 			//alert(this);
 			//alert(password);
			if(password!=arr[1]){
				$tip3.css("display","block");
			$tip3.html('密码不正确！');
			//e.preventDefault();
			//return false;
		}else{
			//j=1;
			$tip3.css("display","none");
			
			j=1;
		}
 	}).on("focus",function(){
 		$tip3.css("display","none")
 	})
 //})
 
	$('.resign-btn').on('click',function(e){
		e.preventDefault();
		alert(j);
		if(j==1){
			alert("登录成功！")
			window.location.href = '../index.html'; 
		}else{
			j=0;
			//return false;
		}
	 })
});
	