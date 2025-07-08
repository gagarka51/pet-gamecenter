let squares = document.querySelectorAll(".square");
let countStep = 0;

squares.forEach((square) => {
	square.addEventListener("click", function () {
		if (square.innerHTML === "" && countStep % 2 == 0) {
			square.innerHTML = "x";
			countStep++;
		} else if (square.innerHTML === "" && square.innerHTML != "x") {
			square.innerHTML = "o";
			countStep++;
		} else {
			alert("Ой-ой-ой, Бобрито Бандито!");
		}
	});
});

function compareSteps() {
	
}