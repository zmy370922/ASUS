define(["jquery","cookie","parabola"],function($,parabola){
	function exhibi (){


		sc_car();
		/*加载商品*/
		$.ajax({
			url:"../json/particulars.json",
			success:function(res){
				var product = "";
				for(var i = 0;i<res.length;i++){
					product += `<li>
						<div class="goods-pic">
							<a href="">
								<img src="${res[i].img}" alt="">
							</a>
						</div>
						<div class="goods-info">
							<h3 class="goods-name">
								<a href="">${res[i].name}</a>
							</h3>
							<div class="goods-price">
								<ins class="price">
									${res[i].price}
								</ins>
							</div>
						</div>
						<div class="goods-action">
							<span class="p-quantity"></span>
							<a href="javascript:void(0);" class="btn-major">
								<span>
									<span class="icon-cart2" id=${res[i].id}>&#xe653;
										加入购物车
									</span>
								</span>
							</a>
						</div>
						<div class="goods-others">
							<a href="javascript:void(0);" class="collect">
								<span class="icon_pic">
									收藏
								</span>
							</a>
							<a href="javascript:void(0);" class="collected">
								<span class="icon_pic2">
									已收藏
								</span>
							</a>
						</div>
					</li>`
				}
				$(".clearfix1").html(product);
			}
		});

		/*收藏*/

		$(".icon_pic").click(function(){
			$(".icon_pic").css("display","none");
			$(".icon_pic2").css("display","block");
		});
		$(".icon_pic2").click(function(){
			$(".icon_pic").css("display","block");
			$(".icon_pic2").css("display","none");
		})


		/*加入购物车*/

		$(".gallery-show").on("click",".icon-cart2",function(){
			/*获取添加到购物车的物品ID*/
			var id = this.id;
			/*判断是否第一次添加cookie*/
			var first = $.cookie("goods") == null ? true : false;
			if(first){
				$.cookie('goods',`[{id:${id},num:1}]`,{expires:7});
			}else{
				/*判断之前是否添加该商品*/
				var str = $.cookie("goods");
				var arr = eval(str);
				var same = false;/*如果没有相同数据*/
				/*判断id是否相同，num++*/
				for(var i in arr){
					if (arr[i].id == id) {
						/*之前添加过该商品*/
						arr[i].num++;
						var cookieStr = JSON.stringify(arr);
						$.cookie('goods',cookieStr,{expires:7});
						same = true;
						break;
					}
				}

				if (!same) {
					/*之前没加过*/
					var obj = {id: id,num:1};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods",cookieStr,{expires:7});
				}
			}
			sc_car();

			return false;

		})


		/*购物框显示/隐藏*/
		$('.minicar').mouseover(function(){
			$('.trolley').css('display','block');
			sc_msg();
		});
		$('.minicar').mouseout(function(){
			$('.trolley').css('display','none');
		});


		/*购物车数字*/
		function sc_car(){
			var sc_str = $.cookie("goods");
			if (sc_str) {/*判断字符串是否存在*/
				var sc_arr = eval(sc_str);
				var sc_num = 0;
				for(var i in sc_arr){
					sc_num = Number(sc_arr[i].num) + sc_num;
				}
				$(".minicar .sc_num").html(sc_num);
				$(".minicart-info .total_num").html(sc_num);
				$(".order_price .allNum").html(sc_num);
			}
		}

		/*账单*/
		function bill(){
			var allprice = 0;
			$.cookie("goods").each(function(){
				var oprice = 0;
				var total= goods-price * sc_num;
			})
		}

		/*加载已存储的cookie*/
		function sc_msg(){
			$.ajax({
				url:"../json/particulars.json",
				success:function(res){
					if ($.cookie("goods")) {
						var sc_arr = eval($.cookie("goods"));
						var product= "";
						for(var i in sc_arr){
							product += `<li>
								<div class="goods-pic">
									<a href="">
										<img src="${res[sc_arr[i].id].img}" alt="">
									</a>
								</div>
								<div class="goods-info">
										<h3 class="goods-name">
											<a href="">${res[sc_arr[i].id].name}</a>
										</h3>
										<div class="goods-price">
											<p>x
												<span class="p-quantity">
													${sc_arr[i].num}
												</span>
											
											</p>
										</div>
									</div>
							</li>`
						}
						$(".trolley ul").html(product);
					}
				}
			})
		}
	}

	return{
		exhibi:exhibi
	}
})