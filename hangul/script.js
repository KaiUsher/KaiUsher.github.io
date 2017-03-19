var chars = ["B / P","D / T","G / K","H","J","R / L","M","N","S","K","T","P","Ch","ng","O / yo","A / ya","U / yu","E","eu","eo / yeo"]
var koreanChars = ["ㅂ","ㄷ","ㄱ","ㅎ","ㅈ","ㄹ","ㅁ","ㄴ","ㅅ","ㅋ","ㅌ","ㅍ","ㅊ","ㅇ","ㅗ/ㅛ","ㅏ/ㅑ","ㅜ/ㅠ","ㅣ","ㅡ","ㅓ/ㅕ"]
var sounds = ["This character has a similar sound to B when it's the first character in a syllable, or a P sound when it's last. Remember this by noting the character looks like a bed or a pot of food.",
				"This character has a similar sound to D when it's the first character in the syllable, or a T sounds when it's last. It looks quite like the pane in a door or a single tooth!",
				"This character has a similar sound to G when it's first in the syllable, or a K sound when last. It looks a lot like a gun, which could be used to kill.",
				"This character has a similar sound to H in English. This character also looks a bit like a person wearing a hat.",
				"This character has a similar sound to J in English. This character has the resemblence of a jug.",
				"This character has a similar sound to R when it's the first character in a syllable, or an L sound when it's last. It resembles a snake, but if that's not your taste, you could climb it like a ladder.",
				"This character has a similar sound to M in English. If you imagine two eyes above it, it also looks like a mouth.",
				"This character has a similar sound to N in English. Just like ㅁ, if you imagine two eyes above ㄴ it looks like a nose.",
				"This character has a similar sound to S in English. It looks remarkably like the summit of a mountain.",
				"This character has a similar sound to K in English. Extend the side of this character and you've got yourself a key.",
				"This character has a similar sound to T in English. Put this chacarter in a mouth and it looks like some teeth.",
				"This character has a similar sound to P in English. This character can double up as a perfect 'part 2' symbol.",
				"This character has a similar sound to Ch in English. What building has a cross on the roof? A Church!",
				"This character has a similar sound to ng in English, but only at the end of a syllable. Otherwise, is makes no sound.",
				"This character has the sound of a 'long O' in English, similar to the O sound in 'old'. With a double stroke, simply add a 'y' sound to the start.",
				"This character has the sound of a 'short A' in English, similar to the A sound in iPad. With a double stroke, simply add a 'y' sound to the start.",
				"This character has the sound of a 'long U' in English, similar to the 'ew' sound in 'newspaper'. With a double stroke, simply add a 'y' sound to the start.",
				"This character has the sound of a 'long E' in English, similar to the 'ee' of tree.",
				"This character has the sound similar to the 'double O' in 'brook'.",
				"This character has the sound of a 'short O' in English, similar to the O sound in iPod. With a double stroke, simply add a 'y' sound to the start."]
var emojis = ["🛏️ / 🍲","🚪 / 😀","🔫 / ☠️","🤠","🏺","🐍","😲","👃","⛰️","🗝️","😀","","⛪","","👵","","📰","🌳","🏞️","🎧",]

function loadChars(){
	
	for(i=0; i<koreanChars.length; i++){
		document.getElementById("charSelect").innerHTML += "<span class='char' id='" + i + "' onclick='displayChar(" + i + ")'>" + koreanChars[i] + "</span>";
	}
	
}

function displayChar(charValue) {
	
	document.getElementById("koreanChar").innerHTML = koreanChars[charValue];
	document.getElementById("englishTranslation").innerHTML = "<p class='englishChar'>" + chars[charValue] + "</p><p class='desc'>" + sounds[charValue] + "</p><p class='emoji'>" + emojis[charValue] + "</p>";
	
	for(i=0; i<koreanChars.length; i++){
		document.getElementById(i).style.backgroundColor = "#000";
		document.getElementById(i).style.color = "#fff";
	}

	document.getElementById(charValue).style.backgroundColor = "#fff";
	document.getElementById(charValue).style.color = "#000";
	
}
