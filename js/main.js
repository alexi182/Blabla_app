$(document).ready(function() {
			
	$(".icon_menu").click(function() {
		$(".menu").slideToggle("normal");
	});  

	$(window).resize(function ()
    {
      $(".menu").removeAttr("style");
   	});          
    
});

