let squares = document.querySelectorAll(".square");

squares.forEach((square) => {
	square.addEventListener("click", function () {
		if (square.innerHTML === "") {
			square.innerHTML = "x";
		} else if (square.innerHTML === "" && square.innerHTML != "x") {
			square.innerHTML = "o";
		} else {
			alert("Ой-ой-ой, Бобрито Бандито!");
		}
	});
});