let blank = document.getElementById('frame-blank');
let left = document.getElementById('frame-left');
let right = document.getElementById('frame-right');

const showArrow = () => {
	let num = Math.ceil(Math.random() * 2);  //get a random number, 1 or 2
	if (num === 1) {   //if 1, show left, hide right
		left.className = 'shown';
		right.className = 'hidden';
	} else if (num === 2) {  //if 2 show right, hide left
		left.className = 'hidden';
		right.className = 'shown';
	}
}

const clear = () => {
	let timeoutID;
	blank.className = 'shown';  //show blank frame
	left.className = 'hidden';
	right.className = 'hidden';
	timeoutID = setTimeout(showArrow, 500);  // wait 1/2 second and show arrow
}

window.addEventListener('click', clear);