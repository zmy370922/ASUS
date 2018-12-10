define(['jquery'],function ($) {
	function slide(){
		
		/*鼠标划入时显示*/
		$('#Mu1').find('#ml1').mouseover(function(){
			// $('Mu1').find('ml0').css()
			$('.nav-list-show').css('display','block');
				$('#Mu1').find('#ml1').mouseout(function(){
					$('.nav-list-show').css('display','none');
			});
		});
		


		$('#Mu1').find('#ml2').mouseover(function(){
			// $('Mu1').find('ml0').css()
			$('.hot-show').css('display','block');
				$('#Mu1').find('#ml2').mouseout(function(){
					$('.hot-show').css('display','none');
			});
		});
		

		/*产品显示*/
		$.ajax({
			url:'../json/slide.json',
			success:function(res){
				var product = "";
				for(var i = 0; i<14;i++){
					product += `<li>
							<a href="">
								<p>
									<img src="${res[i].image}" alt="">
								</p>
								<p>${res[i].title}</p>
							</a>
						</li>`;
						$("#child_top_nav_1").html(product);
				}

				var Popular = "";
				for(var j = 15; j < 18;j++){
					Popular += `<li>
							<a href="">
								<p>
									<img src="${res[j].image}" alt="">
								</p>
								<p>${res[j].title}</p>
							</a>
						</li>`;
						$(".js-hotactivity").html(Popular);
				}

			},
			dataType:"json"
		})

	}
	return{
		slide:slide
	}
})