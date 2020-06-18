var navbar, topbutton, slideshow, reviewform;

window.onload = function()
{
	navbar = document.getElementById("mynav");

	topbutton = document.getElementById("topbutton");

	slideshow = document.getElementsByClassName("slideshow")[0];
	if( slideshow )
		createdot();

	reviewform = document.getElementById("reviewform");
	if( reviewform )
		setupreview();

	if( document.getElementById("start") )
		increasecount();

	window.scrollTo(0,0);
}

window.onscroll = function()
{
	if( document.body.scrollTop > 30 || document.documentElement.scrollTop > 30 )
	{
		navbar.style.padding = "5px 1%";
		topbutton.style.display = "block";
	}
	else
	{
		navbar.style.padding = "30px 1%";
		topbutton.style.display = "none";
	}
}

function gotop()
{
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function nav()
{
	var icon = document.getElementsByClassName("icon")[0];
	if( navbar.className == "nav" )
	{
		navbar.className = "nav compress";
		icon.innerHTML = "&#9747;"
	}
	else
	{
		navbar.className = "nav";
		icon.innerHTML = "&#9776;";
	}
}
