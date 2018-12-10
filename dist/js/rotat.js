define(["jquery"],function ($) {
	function rotat (){
		var oBtns = $(".main-slide").find(".page2").find("ol").find("li");
		var oUl = $(".main-slide").find("ul");
		var oLis = oUl.find("li");


		var iNow = 0;
		var timer = 0;

		oBtns.click(function () {
		iNow = $(this).index();
		tab();
		})


		timer = setInterval(timerInner,2000);


		$("#homepage").hover(function () {
			clearInterval(timer);
		 	},function () {
		 		timer = setInterval(timerInner,2000);
		})


			function timerInner () {
			iNow++;
			// document.title = iNow;
			tab();
			}

			function tab () {
			oBtns.attr("class","").eq(iNow).attr("class","active");

			if(iNow == oLis.size() - 1){
				oBtns.eq(0).attr("class","active");		
			}


			oUl.stop().animate({
				left:-1920*iNow
				},500,function () {
				if (iNow == oLis.size() - 1) {
					oUl.css("left",0);
					iNow = 0;
				}
			});

		}

	}

	return{
		rotat:rotat
	}
})