var repCountTracker = 0;
var setCountTracker = 1;

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
	
	document.getElementById("repContext").innerHTML = repCountTracker;
	document.getElementById("setContext").innerHTML = setCountTracker;
	
	workTimerFunc(workTimer,restTimer,repCount,repCountTracker,setCount,setCountTracker);
	
}

function workTimerFunc(workSeconds,restTimer,repCount,repCountTracker,setCount,setCountTracker){
	
	var id;
	var workCounter = workSeconds;
	
	document.getElementById("timerCount").innerHTML = workCounter.toString();
	document.getElementById("timerCount").style.color = 'green';
	document.getElementById("activity").innerHTML = "exercise";
	
	id = setInterval(function(){
		workCounter--;
		if(workCounter < 0){
			//document.getElementById("timerCount").innerHTML = "END";
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
	
	document.getElementById("timerCount").innerHTML = restCounter.toString();
	document.getElementById("timerCount").style.color = 'red';
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
				document.getElementById("timerCount").style.fontSize = "100px";
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