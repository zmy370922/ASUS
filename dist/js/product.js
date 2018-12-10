define(["jquery"],function($){

	function product(){
		$.ajax({
			url:"../php/index.php",
			success:function(res){
				
				var product = "";
				for(var i = 0; i <= 4; i++){
					console.log(`${res[i].title}`);
					product += ` <li class="ga-product">
								<div class="hot_sale_pic">
									<a href="details.html">
										<img src="${res[i].images}" alt="">
										<div class="iconList">
											<ul class="iconU"></ul>
										</div>
									</a>
								</div>
								<div class="hot_sale_name">
									<a href="">
										<p class="common-intro">
											${res[i].title}
										</p>
										<p class="index-goods-des">${res[i].goods_details}</p>
									</a>
								</div>
								<div class="hot_sale_price">${res[i].shop_price}</div>
							</li> `;
							
				}
				$(".hotgoodList").html(product);
				var product2 = "";
				for(var j = 5; j <= 9; j++){
					product2 += ` <li class="ga-product">
								<div class="hot_sale_pic">
									<a href="details.html">
										<img src="${res[j].images}" alt="">
										<div class="iconList">
											<ul class="iconU"></ul>
										</div>
									</a>
								</div>
								<div class="hot_sale_name">
									<a href="particulars.html">
										<p class="common-intro">
											${res[j].title}
										</p>
										<p class="index-goods-des">${res[j].goods_details}</p>
									</a>
								</div>
								<div class="hot_sale_price">${res[j].shop_price}</div>
							</li> `;
							
				}
				$(".hotgoodList2").html(product2);
			},
			dataType:"json"
			// error:function(msg){
			// 	alert(msg);
			// }
		})

		$(".btngroup").on("click",".icon_right",function(){
		
			$('.hotgoodList2').css('display','block');

			$('.hotgoodList').css('display','none');
				
		});
		$(".btngroup").on("click",".icon_left",function(){
			
			$('.hotgoodList').css('display','block');

			$('.hotgoodList2').css('display','none');
		});
	}

	return{
		product:product
	}
})