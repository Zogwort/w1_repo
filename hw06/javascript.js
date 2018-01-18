var min;

function minimize(target){
	document.getElementById(target).style.overflow = "hidden";
	
	min = setInterval(function(){minimizeHelper(target)}, 1);
}

function minimizeHelper(id){
	var vert = document.getElementById(id).offsetHeight;
	//document.getElementById("title").innerHTML = "<h1>" + vert + "</h1>";
	if(vert<=32){
		clearInterval(min);
		document.getElementById(id).style.display = "none";
	}else{
		document.getElementById(id).style.height= vert - 1 + "px"; 
	}
}
