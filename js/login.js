require.config({
	paths:{
		'jquery':'jquery-1.11.3',
		'cookie':'jquery.cookie',
		"checkout":'checkout',
		
	},
	shim:{
		"cookie":["jquery"],
	}
})



require(['jquery','checkout'],function($,checkout){
	// alert(1);
	checkout.checkout();
	

		
})


