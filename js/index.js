require.config({
	paths:{
		'jquery':'jquery-1.11.3',
		'cookie':'jquery.cookie',
		'slide':'slide',
		'banner':'banner',
		"rotat":"rotat",
		"product":'product',
		"prefectures":"prefectures",
		"thinnest":"thinnest",
		"exhibi":"exhibi",
	},
	shim:{
		"cookie":["jquery"],
	}
})



require(['jquery','slide','banner','rotat','product','prefectures','thinnest','cookie','parabola','exhibi'],function($,slide,banner,rotat,product,prefectures,thinnest,cookie,parabola,exhibi){
	// alert(1);
	slide.slide();
	banner.sidebar();
	rotat.rotat();
	product.product();
	prefectures.prefectures();
	thinnest.thinnest();
	exhibi.exhibi();

		
})


