require.config({
	paths:{
		'jquery':'jquery-1.11.3',
		'cookie':'jquery.cookie',
		'slide':'slide',
		"magnify":"magnify",
		"exhibi":"exhibi",
	},
	shim:{
		"cookie":["jquery"],
	}
})



require(['jquery','slide','magnify','cookie','parabola','exhibi'],function($,slide,magnify,repertory,cookie,parabola,exhibi){
	// alert(1);
	slide.slide();
	magnify.magnify();
	magnify.repertory();
	exhibi.exhibi();


		
})


