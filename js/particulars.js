require.config({
	paths:{
		'jquery':'jquery-1.11.3',
		'cookie':'jquery.cookie',
		"parabola":'parabola',
		'slide':'slide',
		"exhibi":"exhibi",
		
	},
	shim:{
		"cookie":["jquery"],
	}
})



require(['jquery','cookie','parabola','slide','exhibi'],function($,cookie,parabola,slide,exhibi){
	// alert(1);
	slide.slide();
	exhibi.exhibi();
	

		
})