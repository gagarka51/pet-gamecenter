let squares = document.querySelectorAll("square");

squares.forEach((square) => {
	square.addEventListener("click", function () {
		console.log('booom');
	});
});