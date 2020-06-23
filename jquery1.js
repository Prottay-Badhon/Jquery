var para=$("<p>this is paragraph 2</p>")
$("#p1").after(para);
document.write($("a").attr("href") )
$("#st1").css({"color":"green","font-family":"arial"})
$("h3").addClass(" style1 ")
$(".btn").click( function(){
	var value = this.innerHTML;
	$("h3").text(value + "is clicked")
}
)
