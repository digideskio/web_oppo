$('#index_header_left_image_1').hover(function(){
	$(this).attr("src", "/web_oppo/Public/Home/image/Index/i-h-sinawb-h.png");
},function(){
	$(this).attr("src", "/web_oppo/Public/Home/image/Index/i-h-sinawb.png");
});

$('#index_header_left_image_2').hover(function(){
	$(this).attr("src", "/web_oppo/Public/Home/image/Index/i-h-qqwb-h.png");
},function(){
	$(this).attr("src", "/web_oppo/Public/Home/image/Index/i-h-qqwb.png");
});

$('#index_header_right_1_logout').click(function(){
	var data = null;
	$.post("Home/Index/logout", data, function(){
		window.location.href="http://localhost/web_oppo";
	});
});