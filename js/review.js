var reviewtable, totalreviews, review;

function setupreview()
{
	totalreviews = parseInt(window.localStorage.getItem("tichnas:totalreviews"));
	if( !totalreviews )
		totalreviews = 0;
	reviewtable = document.getElementById("reviews");
	var row, cell;
	for(var i=1; i<=totalreviews; i++)
	{
		review = window.localStorage.getItem("tichnas:" + i);
		review = JSON.parse(review);
		row = reviewtable.insertRow();
		cell = row.insertCell();
		cell.innerHTML = review.name;
		cell = row.insertCell();
		cell.innerHTML = review.skill;
		cell = row.insertCell();
		cell.innerHTML = review.level;
		cell = row.insertCell();
		cell.innerHTML = review.comment;
	}
}

function reviewsubmit()
{
	var review = {
	name: document.forms["reviewform"]["name"].value,
	skill: document.forms["reviewform"]["skill"].value,
	level: document.forms["reviewform"]["level"].value,
	comment: document.forms["reviewform"]["comment"].value
	}
	window.localStorage.setItem("tichnas:totalreviews", totalreviews + 1);
	window.localStorage.setItem("tichnas:" + (totalreviews+1), JSON.stringify(review));
}