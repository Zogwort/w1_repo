function getCurrentTimeStamp() {
	var date= new Date();
	return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
}
	
function myTimer() {
	var d = new Date();
	var t = d.toLocaleTimeString();
	document.getElementById("clock").innerHTML = t;
}

var myVar = setInterval(function(){ myTimer() }, 1000);

