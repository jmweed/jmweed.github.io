function randomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#"
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function colorPara() {
	console.log("Colorizing!")
    var one = document.getElementById("1")
    one.style.color = randomColor()
    var one = document.getElementById("2")
    one.style.color = randomColor()
    var one = document.getElementById("3")
    one.style.color = randomColor()
    var one = document.getElementById("4")
    one.style.color = randomColor()
    var one = document.getElementById("5")
    one.style.color = randomColor()
}