define(["jquery"],function($){
	function thinnest(){
		
		$("#head4").mouseenter(function(){
			$(".thinnest_head ul").find("li").attr("class","");
			$(".li4").css("display","block");
			$(".li5").css("display","none");
			$(".li6").css("display","none");
			$(this).attr("class","active");
		});
		$("#head5").mouseenter(function(){
			$(".thinnest_head ul").find("li").attr("class","");
			$(".li4").css("display","none");
			$(".li5").css("display","block");
			$(".li6").css("display","none");
			$(this).attr("class","active");
		});
		$("#head6").mouseenter(function(){
			$(".thinnest_head ul").find("li").attr("class","");
			$(".li4").css("display","none");
			$(".li5").css("display","none");
			$(".li6").css("display","block");
			$(this).attr("class","active");
		});


		// var oBtns = $(".main-slide").find(".page2").find("ol").find("li");
		var oUl = $(".module_slide_274").find("ul");
		var oLis = oUl.find("li");
		

		var iNow = 0;
		var timer = 0;

		// oBtns.click(function () {
		// iNow = $(this).index();
		// tab();
		// })


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
			// oBtns.attr("class","").eq(iNow).attr("class","active");

			// if(iNow == oLis.size() - 1){
			// 	oBtns.eq(0).attr("class","active");		
			// }


			oUl.stop().animate({
				left:-777*iNow
				},500,function () {
				if (iNow == oLis.size() - 1) {
					oUl.css("left",0);
					iNow = 0;
				}
			});

		}


		$.ajax({
			url:"../json/prefectures.json",
			success:function(res){
				var product ="";
				for(var i= 21; i<=23;i++){
					product += `<div class="ga-product">
												<div class="thinnest-goods-pic">
													<a href="">
														<img src="${res[i].img}" alt="">
														<div class="iconList_an"></div>
													</a>
												</div>
												<div class="thinnest-goods-info">
													<a href="">
														<p class="index-goods-tit">${res[i].title}</p>
														<p class="index-goods-des">${res[i].des}</p>
													</a>
												</div>
												<div class="thinnest-goods-price">
													<span>${res[i].price}</span>
												</div>
											</div>`
				}
				$('.thinnest-goods-list').html(product)

				var spirit = "";
				for(var j =24;j <=29;j++){
					spirit +=`<div class="commodity_list">
											<div class="goods-pic">
												<a href="">
													<img src="${res[j].img}" alt="">
													<div class="iconList_an"></div>
												</a>
											</div>
											<div class="goods-info">
													<a href="">
														<p class="goods-tit">${res[j].title}</p>
														<p class="goods-des">${res[j].des}</p>
													</a>
												</div>
											<div class="goods-price">
												<span>${res[i].price}</span>
											</div>
										</div>`
				}
				$('.li5').html(spirit)


				var  funny = "";
				for(var k =30;k<=35;k++){
					funny += `<div class="rocks2">
											<div class="goods-pic">
												<a href="">
													<img src="${res[k].img}" alt="">
													<div class="iconList_an"></div>
												</a>
											</div>
											<div class="goods-info">
													<a href="">
														<p class="goods-tit">${res[k].title}</p>
														<p class="goods-des">${res[k].des}</p>
													</a>
												</div>
											<div class="goods-price">
												<span>${res[k].price}</span>
											</div>
										</div>`
				}
				$('.li6').html(funny)


				var list ="";
				for(var l = 15; l<=20;l++){
					list += `<li>
										<span class="num-1">${res[l].pid}</span>
										<div class="sales">
											<a href="">
												<img src="${res[l].img}" alt="">
											</a>
										</div>
										<div class="goods-info">
											<h3 class="goods-name">
												<a href="">${res[l].title}</a>
											</h3>
											<div class="goods-price">
												<i>${res[l].price}</i>
											</div>
										</div>
									</li>`
				}
				$(".Sales_list").html(list)
			},
			dataType:"json"
		})


	}

	return{
		thinnest: thinnest
	}
})