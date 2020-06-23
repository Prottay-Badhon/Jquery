$("#btn").click(function(){
	$("#pDiv").fadeOut(2000).fadeIn(2000);
})
$("#btn2").click(function(){
	$("#Div2").fadeTo(2000,.4);
})
$("#btn3").click(function(){
	$("#Div2").slideUp(2000).slideDown(2000);
})
$("#btn4").click(function(){
	$("#Div4").animate({width:"400px",height:"400px",marginLeft:"20px"},2000);
	
})