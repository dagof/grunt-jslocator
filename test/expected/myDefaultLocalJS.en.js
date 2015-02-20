/*
	TEMPLATE
*/
function foo(param1, param2){
	var msg = "";

	if (!isNaN(param1)){
		msg += "param1 param #1";
	}

	if (!isNaN(param2)){
		msg += "param2 param #2";
	}

	alert(msg + "param #3");

	return;
}
