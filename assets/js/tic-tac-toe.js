let squares = document.querySelectorAll(".square");

squares.forEach((square) => {
	square.addEventListener("click", function () {
		if (square.innerHTML === "") {
			square.innerHTML = "x";
		} else {
			alert("Ой-ой, Бобрито Бандито");
		}
	});
});