let squares = document.querySelectorAll(".square");
let field1 = document.getElementById("field-1"),
	field2 = document.getElementById("field-2"),
	field3 = document.getElementById("field-3"),
	field4 = document.getElementById("field-4"),
	field5 = document.getElementById("field-5"),
	field6 = document.getElementById("field-6"),
	field7 = document.getElementById("field-7"),
	field8 = document.getElementById("field-8"),
	field9 = document.getElementById("field-9");
let countSteps = 0;

squares.forEach((square) => {
	square.addEventListener("click", function () {
		if (square.innerHTML === "" && countSteps % 2 == 0) {
			square.innerHTML = "x";
			countSteps++;
			compareSteps();
		} else if (square.innerHTML === "" && square.innerHTML != "x") {
			square.innerHTML = "o";
			countSteps++;
			compareSteps();
		} else {
			alert("Ой-ой-ой, Бобрито Бандито!");
		}
	});
});

function compareSteps() {
	if (countSteps > 3) {
		combination1();
		combination2();
		combination3();
		combination4();
		combination5();
		combination6();
		combination7();
		combination8();
		combination9();
	}

	if (countSteps == 9) {
		alert("Ничья!");
	}
}

function combination1 () {
	if ((field1.innerHTML == "x" | field1.innerHTML == "o") && field1.innerHTML === field2.innerHTML && field2.innerHTML === field3.innerHTML) {
		alert("Выиграли " + field1.innerHTML);
		clearAllFields();
	}
}

function combination2 () {
	if ((field1.innerHTML == "x" | field1.innerHTML == "o") && field1.innerHTML === field5.innerHTML && field5.innerHTML === field9.innerHTML) {
		alert("Выиграли " + field1.innerHTML);
		clearAllFields();
	}
}

function combination3 () {
	if ((field4.innerHTML == "x" | field4.innerHTML == "o") && field4.innerHTML === field5.innerHTML && field5.innerHTML === field6.innerHTML) {
		alert("Выиграли " + field4.innerHTML);
		clearAllFields();
	}
}

function combination4 () {
	if ((field7.innerHTML == "x" | field7.innerHTML == "o") && field7.innerHTML === field8.innerHTML && field8.innerHTML === field9.innerHTML) {
		alert("Выиграли " + field7.innerHTML);
		clearAllFields();
	}
}

function combination5 () {
	if ((field3.innerHTML == "x" | field3.innerHTML == "o") && field3.innerHTML === field6.innerHTML && field6.innerHTML === field9.innerHTML) {
		alert("Выиграли " + field3.innerHTML);
		clearAllFields();
	}
}

function combination6 () {
	if ((field2.innerHTML == "x" | field2.innerHTML == "o") && field2.innerHTML === field4.innerHTML && field4.innerHTML === field8.innerHTML) {
		alert("Выиграли " + field2.innerHTML);
		clearAllFields();
	}
}

function combination7 () {
	if ((field3.innerHTML == "x" | field3.innerHTML == "o") && field3.innerHTML === field5.innerHTML && field5.innerHTML === field7.innerHTML) {
		alert("Выиграли " + field3.innerHTML);
		clearAllFields();
	}
}

function combination8 () {
	if ((field1.innerHTML == "x" | field1.innerHTML == "o") && field1.innerHTML === field4.innerHTML && field4.innerHTML === field7.innerHTML) {
		alert("Выиграли " + field1.innerHTML);
		clearAllFields();
	}
}

function combination9 () {
	if ((field1.innerHTML == "x" | field1.innerHTML == "o") && field1.innerHTML === field5.innerHTML && field5.innerHTML === field9.innerHTML) {
		alert("Выиграли " + field1.innerHTML);
		clearAllFields();
	}
}

function clearAllFields() {
	squares.forEach((square) => {  
    	square.innerHTML = null; 
	});
}