var cont = 0;

function soma1() {
	let correctAnswer = document.getElementById("e")
	if (correctAnswer.checked === true) {
		cont++;
	} else {
		cont = cont;
	}
	return cont;
}

function soma2() {
	var correctAnswer = document.getElementById("b")
	if (correctAnswer.checked === true) {
		cont++;
	} else {
		cont = cont;
	}
	return cont;
}

console.log(cont);
