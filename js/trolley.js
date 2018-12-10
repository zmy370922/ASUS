require.config({
	paths:{
		'jquery':'jquery-1.11.3',
		'cookie':'jquery.cookie',
		'slide':'slide',
		"exhibi":"exhibi",
		"order":"order",
	},
	shim:{
		"cookie":["jquery"],
	}
})



require(['jquery','slide','cookie','parabola','exhibi','order'],function($,slide,cookie,parabola,exhibi,order){
	// alert(1);
	slide.slide();
	exhibi.exhibi();
	order.order();

		
})


