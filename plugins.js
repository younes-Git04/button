$(document).ready(function(){

	
	$("#user").blur(function(){
		if ($(this).val().length =="") {
			$(this).parent().find("p").fadeIn();
		}
		else{
			$(this).parent().find("p").fadeOut();
		}
	});
	
});
