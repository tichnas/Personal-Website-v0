var typewriter;
var typingstring1 = "Hi!*I'm Sanchit Arora";
var typingstring2 = "Click Here to Know More";
var wait = 50;
var count = 1;
var typingstring;

function runtypewriter()
{
	typewriter.innerHTML += typingstring[0];
	typewriter.innerHTML += '<span id="point">&#124;</span>';
	setTimeout( () => { printnext(1); }, wait/count);
}

function printnext(p)
{
	var point = document.getElementById("point");
	point.remove();
	if( typingstring[p] == '*' )
		typewriter.innerHTML += "<br>";
	else
		typewriter.innerHTML += typingstring[p];
	typewriter.innerHTML += '<span id="point">&#124;</span>';
	if( p + 1 < typingstring.length )
		setTimeout( () => { printnext(p+1); }, wait/count);
	else if( typewriter != document.getElementById("typewriter2") )
	{
		typewriter = document.getElementById("typewriter2");
		typingstring = typingstring2;
		count++;
		setTimeout( () => { printnext(0); }, 2*wait);
	}
}

function increasecount()
{
	var visited = parseInt(window.localStorage.getItem("tichnas:visited"));
	if( !visited )
		visited = 0;
	 window.localStorage.setItem("tichnas:visited", visited + 1);
	 if( visited )
	 {
	 	typingstring1 = "You already know me*as you have visited " + visited + " time";
	 	typingstring2 = "Just Click Here to Continue";
	 	if( visited > 1 )
	 		typingstring1 += "s";
	 }
	 typingstring = typingstring1;
	 typewriter = document.getElementById("typewriter1");
	 runtypewriter();
}