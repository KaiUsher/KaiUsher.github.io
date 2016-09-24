var repCountTracker = 0;
var setCountTracker = 1;

function validateInputs(){
	
	//Initialise check variables as false to ensure checks are made.
	var workTimeCheck = false;
	var restTimeCheck = false;
	var setsCheck = false;
	var repsCheck = false;
	
	//Pull values from the form.
	var workTimer = document.getElementById("workout").value;
	var restTimer = document.getElementById("rest").value;
	var repCount = document.getElementById("reps").value;
	var setCount = document.getElementById("sets").value;
	
	if((isNaN(workTimer) == false) && workTimer > 0){
		workTimeCheck = true;
	}
	
	if((isNaN(restTimer) == false) && restTimer > 0){
		restTimeCheck = true;
	}
	
	if((isNaN(setCount) == false) && setCount > 0){
		setsCheck = true;
	}
	
	if((isNaN(repCount) == false) && repCount > 0){
		repsCheck = true;
	}
	
	//Only start the timer if all inputs have been checked and are valid.
	if((workTimeCheck == true) && (restTimeCheck == true) && (setsCheck == true) && (repsCheck == true)){
		startTimer();
	}else{
		alert("There is a problem with one or more of your inputs; please ensure you are using only positive numbers!");
	}
	
}


function startTimer(){
	
	var workTimer = document.getElementById("workout").value;
	var restTimer = document.getElementById("rest").value;
	var repCount = document.getElementById("reps").value;
	var setCount = document.getElementById("sets").value;
	
	var workCounter = workTimer;
	var restCounter = restTimer;
	
	if(repCountTracker >= repCount){
		repCountTracker = 0;
	};
	
	repCountTracker = repCountTracker + 1;
	
	document.getElementById("context").innerHTML = 'seconds of <span class="activity" id="activity">exercise</span> <span class="repContext" id="repContext"></span> of set <span class="setContext" id="setContext"></span>'; 
	document.getElementById("repContext").innerHTML = repCountTracker;
	document.getElementById("setContext").innerHTML = setCountTracker;
	
	workTimerFunc(workTimer,restTimer,repCount,repCountTracker,setCount,setCountTracker);
	
}

function workTimerFunc(workSeconds,restTimer,repCount,repCountTracker,setCount,setCountTracker){
	
	var id;
	var workCounter = workSeconds;
	
	document.getElementById("timerCount").style.fontSize = "200px";
	document.getElementById("timerCount").innerHTML = workCounter.toString();
	document.getElementById("timerCount").style.color = 'green';
	document.getElementById("activity").innerHTML = "exercise";
	
	id = setInterval(function(){
		workCounter--;
		if(workCounter < 0){
			clearInterval(id);
			restTimerFunc(restTimer,repCount,workSeconds,repCountTracker,setCount,setCountTracker)
		} else {
			document.getElementById("timerCount").innerHTML = workCounter.toString();
		}		
	}, 1000);
};
	
function restTimerFunc(restSeconds,repCount,workSeconds,repCountTracker,setCount,setCountTracker){
	
	var id;
	var restCounter = restSeconds;
	
	document.getElementById("timerCount").style.fontSize = "200px";
	document.getElementById("timerCount").innerHTML = restCounter.toString();
	document.getElementById("timerCount").style.color = '#e60000';
	document.getElementById("activity").innerHTML = "rest";
	
	id = setInterval(function(){
		restCounter--;
		if((restCounter < 0) && (repCountTracker != repCount)){
			clearInterval(id);
			repCountTracker++;
			startTimer();
		} else if(restCounter < 0 && (repCountTracker == repCount)) {
			if ((setCountTracker == setCount) && (repCountTracker == repCount)){
				clearInterval(id);
				document.getElementById("timerCount").innerHTML = "END";
				document.getElementById("context").innerHTML = "You smashed it!";
				document.getElementById("timerCount").style.fontSize = "135px";
				document.getElementById("timerCount").style.color = '#262626';
			} else {
				clearInterval(id);
				window.setCountTracker++;
				startTimer();
			}
		} else {
			document.getElementById("timerCount").innerHTML = restCounter.toString();
		}	
	}, 1000);
	
};