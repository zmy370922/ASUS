define(["jquery"],function($){
	/*放大镜*/
	function magnify(){
		// alert(1)
		$(".mark").mouseenter(function() {
		    $(".float_box").css("display","block")
		    $(".big-box").css("display","block")
		})
		$(".mark").mouseout(function() {
		    $(".float_box").css("display","none")
		    $(".big-box").css("display","none")
		})
		$(".mark").mouseenter(function(e) {
		    var l = e.pageX - $(".small_box").offset().left - ($(".float_box").width() / 2) 
		    var t = e.pageY - $(".small_box").offset().top - ($(".float_box").height() / 2) 
		    if (l < 0) {
		        l = 0
		    }
		    if (l > $(this).width() - $(".float_box").width()) {
		        l = $(this).width() - $(".float_box").width()
		    }
		    if (t < 0) {
		        t = 0
		    }
		    if (t > $(this).height() - $(".float_box").height()) {
		        t = $(this).height() - $(".float_box").height()
		    }

		    $(".float_box").css({
		        "left": l,
		        "top": t
		    })
		    var pX = l / ($(".mark").width() - $(".float_box").width()) 
		    var pY = t / ($(".mark").height() - $(".float_box").height())
		    $(".big-box img").css({
		        "left": -pX * ($(".big-box img").width() - $(".big-box").width()),
		        "top": -pY * ($(".big-box img").height() - $(".big-box").height())
		    })
		})
	};
	/*库存cookei*/
	function repertory(){
		// alert(1);	
			
		/*购买数量*/
		var i = 1;
		$(".q-input").val(i);
			$(".btn-increase").click(function(){
				if(i<6){
					i++;
				}else{
					i = 6;
					alert("你买的起吗？   穷逼")
				}
				$(".q-input").val(i);
				
			})
			$(".btn-decrease").click(function(){
				if(i>1){
					i--;
				}else{
					i = 1;
					alert("就买一台？  穷逼")
				}
				$(".q-input").val(i);
				
			})


			/*购买规格*/
		$(".clearfix3").find("li").click(function(){
			$(".clearfix3").find("li").attr("class","");

			$(this).attr("class","active");

		})

		// /*加入购物车*/

		// $(".p-action").on("click",".btn-cart",function(){
		// 	var 
		// })

	}
	return{
		magnify:magnify,
		repertory:repertory
	}
})