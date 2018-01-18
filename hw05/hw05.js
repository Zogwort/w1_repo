//var len = prompt("What is the length of your room?");
//var wide = prompt("What is the width of your room?");
//var high = prompt("What is the height of your room?");

var string1 = "The quick brown fox jumped over the spectre of communism haunting Europe";

var string2 = "Google Murray Bookchin. Don't just wait for the Cinemachin";

var string3 = "Pneumonoultramicroscopicsilicovolcanoconiosis is a really long word for Silicosis, a lung disease caused by inhaling very find ash and sand dust."

function area(x,y,z){
	return x*y*z;
}

function countChars(str, chr){

	var count = 0;	

	for (var i = 0; i < str.length; i++){
		if(str.charAt(i) == chr){
			count++;
		}
	}

	return count;

}

function findLongestWord(str){
	var longest = "";
	str = str.split(" ");
	
	for(var i =0; i < str.length; i++){
		if(str[i].length > longest.length){longest=str[i];}
	
	}

	return longest;
}

//var surface = 2*(len*wide)+2*(wide*high)+2*(len*high);

//document.writeln("<h2> Area </h2>");
//document.writeln("<p> The area of your room is " + area(len,wide,high) + "</p>");

document.writeln("<h2>Demonstrating countChars </h2>");


document.writeln("<p>countChars('This is so very interesting','e'): "+ countChars('This is so very interesting','e') + "  </p>");
document.writeln("<p>countChars('This is so very interesting','g'): "+ countChars('This is so very interesting','g') + "  </p>");
document.writeln("<p>countChars('This is so very interesting','z'): "+ countChars('This is so very interesting','z') + "  </p>");

document.writeln("<h2>Demonstrating findLongestWord</h2>");

document.writeln("<p>The longest word out of &quot" + string1 + "&quot is " + findLongestWord(string1) + "</p>" );
document.writeln("<p>The longest word out of &quot" + string2 + "&quot is " + findLongestWord(string2) + "</p>" );
document.writeln("<p>The longest word out of &quot" + string3 + "&quot is " + findLongestWord(string3) + "</p>" );
