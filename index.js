


function playSound(e){	
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);	
	if (audio === null) return; // Interrupt the execution

	const div = document.querySelector(`div[data-key="${e.keyCode}"]`);
	audio.currentTime = 0;
	audio.play();

	div.classList.add("playing");

}

function removePlayingClass(e){	
	const div = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (div === null) return; // Interrupt the execution
	
	div.classList.remove("playing");

}

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removePlayingClass);

