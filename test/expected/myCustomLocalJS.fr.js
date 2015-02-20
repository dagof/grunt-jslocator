/*
	TEMPLATE
*/
function foo(param1, param2){
	var msg = "";

	if (!isNaN(param1)){
		msg += "param1 1r parametre";
	}

	if (!isNaN(param2)){
		msg += "param2 2e parametre";
	}

	alert(msg + "3e parametre");

	return;
}
