function insertNumber(num){
	var currentNum = $("#result").val()
	$("#result").val(currentNum+num);
}
$("#delete").click(function(){
	$("#result").val("");
})
function calculate(){
	var operation = $("#result").val();
	var result=eval(operation);
	$("#result").val(result);
}
function deleteNum(){
	var currentNum = $("#result").val();
	var newNum = currentNum.slice(0,-1);
	$("#result").val(newNum);
}