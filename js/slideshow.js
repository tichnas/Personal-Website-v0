const totalimages = 7;
var dots, curimage = 1;

function createdot()
{
	for(var i=2; i<=totalimages; i++)
		slideshow.innerHTML += '<span class="dot" onclick="changeimage(' + i + ')"></span> '
}

function changeimage(number)
{
	if( number )
		curimage = number;
	else
		curimage = ( curimage % totalimages ) + 1;
	document.getElementsByClassName("load")[0].style.display = "block";
	slideshow.getElementsByTagName("img")[0].setAttribute("src", "../img/" + curimage + ".png");
	slideshow.getElementsByTagName("img")[0].onload = function()
	{
		document.getElementsByClassName("load")[0].style.display = "none";
	}
	dots = document.getElementsByClassName("dot");
	for(var i=0; i<dots.length; i++)
		dots[i].className = "dot";
	dots[curimage-1].className += " active";
}