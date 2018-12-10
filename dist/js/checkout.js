define(["jquery"],function($){
	function checkout(){
		$(".login").find("a").click(function(){
			$(".register").css("display","block");
			$(".login").css("display","none");
		});
		$(".register").find("a").click(function(){
			$(".login").css("display","block");
			$(".register").css("display","none");
		});
			/*登录*/
		$("#login").click(function(){
			var str = `username=${$('.loginMsg .username').val()}&password=${$(".loginMsg .password").val()}`;

			$.ajax({
				mothod:"post",
				url:"../php/login.php?type=login",
				data:str,
				success:function(data){
					alert(data);
				},
				error:function(msg){
					alert(msg);
				}
			})	
		});
			/*注册*/
		$("#register").click(function(){
			var str = `username=${$(".registerMsg .username").val()}&password=${$(".registerMsg .password").val()}&repassword=${$(".registerMsg .repassword").value}`;

			$.ajax({
				mothod:"post",
				url:"../php/login.php?type=register",
				data:str,
				success:function(data){
					alert(data);
				},
				error:function(msg){
					alert(1);
				}
			})	
		})

	}

	return{
		checkout:checkout
	}
})