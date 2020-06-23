$(".btn").click(function(){
	
	var inpwd =$("#inPwd").val();
	
	var cpwd = $("#confPwd").val();
	if(inpwd !="" && cpwd !=""){
	if(inpwd == cpwd){
	 $("#showDiv").text("successfully matched")
	}
	else
		 $("#showDiv").text("not matched")
	}
	else
		 alert("please enter pwd")
	
	
	
}
)