$("#btn").click(function(){
	$("#addDiv").addClass("Hello");
})
$("#rmv").click(function(){
	alert($("#addDiv").attr("style"))
	//($("#addDiv").width());
})
$("#toggle").click(function(){
	$("#addDiv").toggleClass("Hello");
})
//$("#addDiv").css({"background":"green","color":"white","height":"200px","fontSize":"40"})
