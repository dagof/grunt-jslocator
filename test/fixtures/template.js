/*
	TEMPLATE
*/
function foo(param1, param2){
	var msg = "";

	if (!isNaN(param1)){
		msg += "param1 <%=param1%>";
	}

	if (!isNaN(param2)){
		msg += "param2 <%=param2%>";
	}

	alert(msg + "<%=param3%>");

	return;
}
