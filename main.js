function determineGrade() {
	let grade = document.getElementById('inputGrade').value;

	if (grade <= 65) {
		window.alert("You failed.")
	}
	else if (grade <= 75) {
		window.alert("You are below average.")
	}
	else if (grade <= 80) {
		window.alert("You're grade is average/mid.")
	}
	else if (grade <= 85) {
		window.alert("You are above average!")
	}
	else if (grade <= 100) {
		window.alert("You are perfect!")
	}
}