function makeVisible(choice) {
	console.log(choice);
	switch(choice) {
		case "about":
			document.getElementById("ethos").style.visibility ="hidden";
			document.getElementById("skills").style.visibility ="hidden";
			document.getElementById("work").style.visibility ="hidden";
			document.getElementById("contact").style.visibility ="hidden";
			break;
		case "ethos":
			document.getElementById("about").style.visibility ="hidden";
			document.getElementById("skills").style.visibility ="hidden";
			document.getElementById("work").style.visibility ="hidden";
			document.getElementById("contact").style.visibility ="hidden";
			break;
		case "skills":
			document.getElementById("about").style.visibility ="hidden";
			document.getElementById("ethos").style.visibility ="hidden";
			document.getElementById("work").style.visibility ="hidden";
			document.getElementById("contact").style.visibility ="hidden";
			break;
		case "work":
			document.getElementById("about").style.visibility ="hidden";
			document.getElementById("ethos").style.visibility ="hidden";
			document.getElementById("skills").style.visibility ="hidden";
			document.getElementById("contact").style.visibility ="hidden";
			break;
		case "contact":
			document.getElementById("about").style.visibility ="hidden";
			document.getElementById("ethos").style.visibility ="hidden";
			document.getElementById("work").style.visibility ="hidden";
			document.getElementById("skills").style.visibility ="hidden";
			break;
		default:
			break;
	}
	document.getElementById(choice).style.visibility ="visible";
	document.getElementById(choice).style.zIndex ="1";
}