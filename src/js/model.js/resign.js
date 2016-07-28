// JavaScript Document
//==========================登录页面===============================
;jQuery(function(){
	//登录用户的判断
	var $tip = $(".tip");
	var $tip1 = $(".tip1");
	var $tip3 = $(".tip3");
	//点击登录按钮
	$('.resign-btn').on('click',function(e){
		//定义空数组记录已注册账户信息
		e.stopPropagation();
		var arr=[];
		var _cookie = document.cookie.split('; ');
		
		if(_cookie != ''){
			//alert(_cookie);
			//遍历cookie信息，读取键名包含user字符串的cookie，并输出到arr
			$.each(_cookie,function(index,val){
				//alert(val.split('=')[0].split('-')[0]);
				if(val.split('=')[0].split('-')[0].indexOf('user') != -1){
					//alert(val.split('=')[1]);
					var user=JSON.parse(val.split('=')[1]);
					arr.push(user);
					if(user.phone==""){
					}
				}else{
					//$tip1.css("display","block");
					//$tip1.html('用户不存在，请先注册');
					//return;
				}
			});
			var userName=$('#loguse').val();
			var psw=$('#logmima').val();
			//var seccode = $('#login_seccode').val();
			//设置是否成功登录的开关
			var onOff = true;
			$.map(arr,function(val,idx){
				//手机号和密码相对应时，才能登录成功，并跳转到首页
				if(userName==val.phone && psw==val.psw){
					//alert(val.psw);
					//登录成功，设置status的cookie值为true
					document.cookie='status='+ true + ';path=/';
					onOff = false;
					$tip3.hide();
					window.location.href = '../index.html';
					return false;
				}
			});
			if(onOff){
				$.map(arr,function(val,idx){
					if(userName!=val.phone || psw!=val.psw){
						$tip3.css("display","block");
						$tip3.html('用户名或密码不正确');
					}
				});
			}
		}else {
			$tip1.css("display","block");
			$tip1.html('请先注册,再登录。');
		}	
		return false;	
	});
});