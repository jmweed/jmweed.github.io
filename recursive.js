var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var myWidth = canvas.width;
var myHeight = canvas.height;
var counter = 0
var midx = myWidth / 2
var midy = myHeight / 2

class complex {
	constructor (a, b)	{
		this.real = a
		this.imag = b
	}
	x ()	{
		return this.real
	}
	y ()	{
		return this.imag
	}
}

function f(x, n) {
	if (n == 0)	{
		return 1
	} 
	else {
		return x + f(x, n-1)
	}
}

function stop()	{
	clearInterval(starmaker)
}

ctx.strokeStyle = "green";

compVar = new complex(3,3)

function stars() {
	ctx.fillStyle = "grey"
	ctx.fillRect(0,0,myWidth,myHeight)
	ctx.beginPath()
	for (counter = 0; counter <= 100; counter++)	{
		compVar.real = (Math.random()-0.5) * myWidth
		compVar.imag = (Math.random()-0.5) * myHeight
		ctx.moveTo(midx + compVar.x(), midy + compVar.y())
		ctx.lineTo(midx + compVar.x()+2, midy + compVar.y()+2)
		ctx.stroke()
	}
}

var starmaker = setInterval(stars, 30)
