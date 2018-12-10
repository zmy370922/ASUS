define(["jquery","cookie","parabola"],function($,parabola){
	function order(){
		sc_msg();

		/*加载已存储的cookie*/
		function sc_msg(){
			$.ajax({
				url:"../json/particulars.json",
				success:function(res){
					if ($.cookie("goods")) {
						var sc_arr = eval($.cookie("goods"));
						var product= "";
						var sum=0;

						for(var i in sc_arr){

					product += `<div class="cart-product" id="cart-product">
									<ul class="clearfix2">
										<li class="cart-input">
											<input type="checkbox" name="items" class="check"  checked ='checked'/>
										</li>
										<li class="cart-goods">
											<div class="p-pic">
												<a href="">
													<img src="${res[sc_arr[i].id].img}" alt="">
												</a>
											</div>
											<div class="p-title">
												<a href="">
													${res[sc_arr[i].id].name}<br>
													<span class=" fix-empty"></span>
												</a>
											</div>
										</li>
										<li class="cart-price">${res[sc_arr[i].id].price}</li>
										<li class="cart-num">
											<div class="p-quantity">
												<a href="javascript:void(0);" class="btn-decrease">-</a>
												<input type="text" class="q-input"  value = "${sc_arr[i].num}" id='${res[sc_arr[i].id].id}'>
												<a href="javascript:void(0);"  class="btn-increase" id='${i}'>+</a>
											</div>
											<p class="goods_num"></p>
										</li>
										<li class="cart-discount">$0</li>
										<li class="cart-point"></li>  
										<li class="cart-subtotal">${res[sc_arr[i].id].price*sc_arr[i].num*1.0}</li>
										<li class="cart-action">
											<a href="javascript:void(0);" class="btn-delete">
												<i class="icon-fork" id = "${i}">X</i>
											</a>
										</li>
									</ul>
								</div>`;
								sum+=res[sc_arr[i].id].price*sc_arr[i].num*1.0; 
						} 
							$(".cart-item").html(product);

							$(".total-price b").html(sum)
							$(".minicart-info .price").html(sum)



							/*全选*/
							var $items = $(':checkbox[name=items]')
							$("#checkedAllBtn").click(function(){
								 $items.prop('checked', true);
							})

							 /*点击添加*/

							$(".cart-item").on("click",".btn-increase",function(){
								
								var text = $(this).siblings("input[type=text]");
								text.val(Number(text.val()) + 1);
	
								/*增加cookie*/
								var id = this.id;

								var str = $.cookie("goods");
								var arr = eval(str);
								for(var i in arr){
									if(arr[i].id == id){
										arr[i].num += 1;
									}
									/*账单*/
									sum+=res[sc_arr[i].id].price*sc_arr[i].num*1.0;
									$(".total-price  b").html(sum)
								}

								var cookieStr = JSON.stringify(arr);
								$.cookie("goods",cookieStr,{expires:7});

							})

							/*点击减少*/

							$(".cart-item").on("click",".btn-decrease",function(){
								
								var text = $(this).siblings("input[type=text]");
								text.val(Number(text.val()) - 1);
	
								/*增加cookie*/
								var id = this.id;

								var str = $.cookie("goods");
								var arr = eval(str);
								for(var i in arr){
									if(arr[i].id == id){
										arr[i].num -= 1;
									}
									/*账单*/
									sum-=res[sc_arr[i].id].price*sc_arr[i].num*1.0;
									$(".total-price  b").html(sum)
								}
								
								var cookieStr = JSON.stringify(arr);
								$.cookie("goods",cookieStr,{expires:7});

							})



							$(".cart-item ").on("click",".icon-fork",function(){
								/*删除cookie*/
								var str = $.cookie("goods");
								var arr = eval(str);
								arr.splice($(this).attr("id"),1);
								var cookieStr = JSON.stringify(arr);
								$.cookie("goods",cookieStr,{expires:7});


								/*购物车数字*/
								var sc_str = $.cookie("goods");
								if (sc_str) {/*判断字符串是否存在*/
									var sc_arr = eval(sc_str);
									var sc_num = 0;
									for(var i in sc_arr){
										sc_num = Number(sc_arr[i].num) + sc_num;
									}
									$(".minicar .sc_num").html(sc_num);
								}


								/*账单*/
								sum+=res[sc_arr[i].id].price*sc_arr[i].num*1.0;
								$(".total-price b").html(sum)



								/*删除页面内容*/
								$("#cart-product").animate({"height":0},300,function(){
									$("#cart-product").remove();
								});
							})
					}
				}
			})
		}



		
		


	}
	return{
		order:order
	}
})