$(function(){
    SyntaxHighlighter.defaults.toolbar = false;
    SyntaxHighlighter.all();
    
	$(window).scroll(function(){
        $(".ScrollUp")[$(window).scrollTop()>0?"fadeIn":"fadeOut"](300);
	});
	$(".ScrollUp").click(function(){
		$("html,body").animate({scrollTop:0},300);
	});

    $("dt").click(function() {
        $("html,body").animate({scrollTop:$("h2:eq("+$("dt").index(this)+")").offset().top},300);
    });
    
    $("dd").click(function() {
        $("html,body").animate({scrollTop:$("h3:eq("+$("dd").index(this)+")").offset().top},300);
    });
});