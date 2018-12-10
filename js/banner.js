define(['jquery'],function ($) {
	function sidebar(){
		// $('.category-list').find('li').mouseover(function(){
		// 	$('.sub-box-clearfix').css('display','block');
		// });
		// $('.category-list').find('li').mouseout(function(){
		// 	$('.sub-box-clearfix').css('display','none');
		// });
	
		
		/*侧边栏*/
		$.ajax({
			async:false,
			url:'../json/banner.json',
			 type:"get",
			success: function(res){
				console.log(res);
				for(var i = 0; i<res.length;i++){
					$(`<li class="">
								<a href="particulars.html">
									<span>${res[i].title}</span>
									<i></i>
								</a>
								
							</li>`).appendTo($(".category-list"));
					var category_box = $(`<div class="sub-category-box" id="id${res[i].id}.id}">
										<div class="paad">
											

										</div>
									</div>
									<div class="sub-category-ad">
										<a href="">
											<img src="${res[i].image}">
										</a>
									</div>`);
					category_box.appendTo($(".sub-box-clearfix"));
					var res2 = res[i].mold;
					for(var j = 0; j<res2.length;j++){
						var node = $(`<dl class="sub-category" id="id${res2[j].id}>
												<dt>
													<a href="particulars.html">
														<span class="cata-img">
															<img src="${res2[j].img}">
														</span>
														<span class="cata-name">${res2[j].name}</span>
													</a>
												</dt>
												<dd class="clearfix">
													<a href="">灵耀3</a>
													<a href="">灵耀u</a>
													<a href="">灵耀s</a>
												</dd>
											</dl>`);
						var index = j;
						node.appendTo($(`#id${i} .paad`))
					}

				}
								
			},error: function(err){
				console.log(err)
			}
			/*dataType:"json"*/
		})
		$(".category-list").on("mouseenter","li",function(){
			// 
			// alert($(this).index())
			$(this).attr('class','active');
			// $(".active").css("background","blue");
			$('.sub-box-clearfix').css('display','block');

				// $(this).attr('class','active');
				$(".category-list").find("li").mouseout(function(){
				$('.category-list').find('li').attr('class','');
				$('.sub-box-clearfix').css('display','none');
			});
		})
	}



	return{
		sidebar: sidebar
	}
})