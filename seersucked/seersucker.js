console.log("Salve")


var canvas = document.getElementById("fabric");
var context = canvas.getContext("2d");
var myWidth = window.innerWidth;
var myHeight = window.innerHeight;
context.fillStyle = "#000000";
context.fillRect(0,0,myWidth,myHeight);
var stripeCounter = 0
var stripeNumber = 100
var stripeWidth = 20
var squareSize = stripeWidth / 5
var color = "#b2b2ff"
var sugarRail = stripeWidth


whitestripes();
checkerboardStripes();
context.font = "72px Times New Roman"
context.fillStyle = "#6666ff"
context.textAlign = "center"
context.fillText("Y0U'V3 B33N S33RSUCK3D", myWidth/2, myHeight/2)



function whitestripes() {
	var milkjug = 0
	console.log("whitestripe-ing")
	context.fillStyle = "#ffffff"
	console.log(stripeCounter)
	for (stripeCounter = 0; stripeCounter <= stripeNumber; stripeCounter++) {
		console.log("white stipe completed")
		context.fillRect(milkjug, 0, stripeWidth, myHeight)
		milkjug = milkjug + (stripeWidth * 2)
		
	}
}

function checkerboardStripes() {
	for (stripeCounter = 1; stripeCounter <= stripeNumber; stripeCounter++) {
		checkerboardStripe(sugarRail)
		sugarRail = sugarRail + stripeWidth * 2
	}
}

function checkerboardStripe(sjar) {
	var sugarjar = sjar
	var squareCounter
	var checkerRowCounter
	for (checkerRowCounter = 0; checkerRowCounter <= myHeight / squareSize; checkerRowCounter++) {
		if (checkerRowCounter%2 == 0) {
			context.fillStyle = color
			context.fillRect(sugarjar, checkerRowCounter * squareSize, squareSize, squareSize)
			context.fillRect(sugarjar + (squareSize * 2), checkerRowCounter * squareSize, squareSize, squareSize)
			context.fillRect(sugarjar + (squareSize * 4), checkerRowCounter * squareSize, squareSize, squareSize)
			context.fillStyle = "#ffffff"
			context.fillRect(sugarjar + squareSize, checkerRowCounter * squareSize, squareSize, squareSize)
			context.fillRect(sugarjar + (squareSize * 3), checkerRowCounter * squareSize, squareSize, squareSize)
		}
		else {
			context.fillStyle = "#ffffff"
			context.fillRect(sugarjar, checkerRowCounter * squareSize, squareSize, squareSize)
			context.fillRect(sugarjar + (squareSize * 2), checkerRowCounter * squareSize, squareSize, squareSize)
			context.fillRect(sugarjar + (squareSize * 4), checkerRowCounter * squareSize, squareSize, squareSize)
			context.fillStyle = color
			context.fillRect(sugarjar + squareSize, checkerRowCounter * squareSize, squareSize, squareSize)
			context.fillRect(sugarjar + (squareSize * 3), checkerRowCounter * squareSize, squareSize, squareSize)
		}
	}
}

/*
function stripemaker(sNum, tNum) {
	for (stripeCounter = 0; stripeCounter <= stripeNumber; stripeCounter++) {
		needlePos = needlePos + stripeWidth
		for (threadCounter = 0; threadCounter <= stripeWidth; threadCounter++) {
			context.strokeStyle = "#b2b2ff"
			context.moveTo(needlePos,0)
			context.lineTo(needlePos,800)
			context.stroke()
			if (threadCounter%2 == 0) {
				console.log("beewoop")
				context.stokeStyle = "#ff7373"
				context.moveTo(needlePos, 0)
				context.lineTo(needlePos, 800)
				context.stroke()
			}
			needlePos = needlePos + 1
		}	
	}
}
//weave



stripemaker(stripeNumber, stripeWidth)
*/

console.log("dab")