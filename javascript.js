function makeVisible(choice) {
	console.log(choice);
	switch(choice) {
		case "about":
			document.getElementById("ethos").style.opacity ="0";
			document.getElementById("skills").style.opacity ="0";
			document.getElementById("work").style.opacity ="0";
			document.getElementById("contact").style.opacity ="0";
			break;
		case "ethos":
			document.getElementById("about").style.opacity ="0";
			document.getElementById("skills").style.opacity ="0";
			document.getElementById("work").style.opacity ="0";
			document.getElementById("contact").style.opacity ="0";
			break;
		case "skills":
			document.getElementById("about").style.opacity ="0";
			document.getElementById("ethos").style.opacity ="0";
			document.getElementById("work").style.opacity ="0";
			document.getElementById("contact").style.opacity ="0";
			break;
		case "work":
			document.getElementById("about").style.opacity ="0";
			document.getElementById("ethos").style.opacity ="0";
			document.getElementById("skills").style.opacity ="0";
			document.getElementById("contact").style.opacity ="0";
			break;
		case "contact":
			document.getElementById("about").style.opacity ="0";
			document.getElementById("ethos").style.opacity ="0";
			document.getElementById("work").style.opacity ="0";
			document.getElementById("skills").style.opacity ="0";
			break;
		default:
			break;
	}
	document.getElementById(choice).style.opacity ="1";
}