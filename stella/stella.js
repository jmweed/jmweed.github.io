var c = document.getElementById("sky");
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;

function night()
{
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,c.width,c.height);
}

var galaxy = [];
var starCount = 200;
var selectedI = 0;
var targetI = 0;
var mousedown = false;

var constellation = [];

var testLine = null;



function Star(nxpos, nypos)
{
	this.xpos = nxpos;
	this.ypos = nypos;
	this.render = function()	{
		ctx.beginPath();
		ctx.strokeStyle = "#FFFFFF";
		ctx.moveTo(this.xpos-2, this.ypos);
		ctx.lineTo(this.xpos+2, this.ypos);
		ctx.moveTo(this.xpos, this.ypos-2);
		ctx.lineTo(this.xpos, this.ypos+2);
		ctx.strokeStyle = "#FFFFFF";
		ctx.stroke();
	} 
}

function Line(orgi, tari)
{
	this.orgi = orgi;
	this.tari = tari;
	this.render = function()	{
		ctx.beginPath();
		ctx.moveTo(galaxy[orgi].xpos, galaxy[orgi].ypos);
		ctx.lineTo(galaxy[tari].xpos, galaxy[tari].ypos);
		ctx.strokeStyle = '#FFFFFF';
		ctx.stroke();
	}
}

function renderGalaxy()
{
	night();
	for (var i = 0; i < starCount; i++)
	{
		galaxy[i].render();
	}
	for (var i = 0; i < constellation.length; i++)
	{
		constellation[i].render();
	}
}

function createGalaxy()
{
	galaxy = [];
	for (var i = 0; i < starCount; i++)
	{	
		var nXpos = (Math.random() * c.width);
		var nYpos = (Math.random() * c.height);
		var nStar = new Star(nXpos, nYpos);
		galaxy.push(nStar);
	}
	renderGalaxy();
}

createGalaxy();

function renderSelectionArrow(gi)
{
	gx = galaxy[gi].xpos
	gy = galaxy[gi].ypos
	ctx.lineWidth = 0;
	ctx.beginPath();
	ctx.moveTo(gx - 8, gy);
	ctx.lineTo(gx - 2, gy);
	ctx.lineTo(gx - 6, gy + 2);
	ctx.moveTo(gx - 2, gy);
	ctx.lineTo(gx - 6, gy - 2);
	ctx.strokeStyle = '#00FF00';
	ctx.stroke();
}

function findNearestStar(mx, my)
{
	var bestdiff = 40000;
	var besti = 0;
	for (var i = 0; i < starCount; i++)
	{
		var xdiff = Math.abs(mx - galaxy[i].xpos);
		var ydiff = Math.abs(my - galaxy[i].ypos);
		var diff = xdiff + ydiff;
		if (diff < bestdiff)
		{
			bestdiff = diff;
			besti = i;
		}
	}
	//console.log("Nearest star is distance of: ", bestdiff);
	//console.log("Nearest star is at Galaxy Pos: ", besti);
	return besti;
}

function findTargetStar(gi, mx, my)
{
	var bestdiff = 40000;
	var besti = 0;
	for (var i = 0; i < starCount; i++)
	{
		if (i == gi) {}
		else 
		{
			var xdiff = Math.abs(mx - galaxy[i].xpos);
			var ydiff = Math.abs(my - galaxy[i].ypos);
			var diff = xdiff + ydiff;
			if (diff < bestdiff)
			{
				bestdiff = diff;
				besti = i;
			}
		}
	}
	return besti;
}

function mov()
{
	e = window.event
	var xpos = 0;
	var ypos = 0;
	xpos = e.offsetX;
	ypos = e.offsetY; 
	//console.log("reading mouse x as: ", xpos);
	//console.log("reading mouse y as: ", ypos);
	if (mousedown)
	{
		targetI = findTargetStar(selectedI, xpos, ypos);
		tempLine = new Line(selectedI, targetI);
		if (tempLine == testLine)
		{}	
		else
		{
			renderGalaxy();
			renderSelectionArrow(selectedI);
			renderSelectionArrow(targetI);
			testLine = tempLine;
			tempLine.render();
		}
	}
	else
	{
		var nearestI = findNearestStar(xpos, ypos);
		if (nearestI == selectedI) 
		{
			return
		}
		else
		{
			renderGalaxy();
			selectedI = nearestI;
			renderSelectionArrow(selectedI);
		}
	}
}

function down()
{
	mousedown = true;
}

function up()
{
	mousedown = false;
	constellation.push(testLine);
	mov();
}

function kdown()
{
	k = window.event.key;
	kCode = window.event.keyCode;
	console.log("hey");
	if (k == "n" || k == "N")
	{
		constellation = [];
		createGalaxy();
	}
	else if (k == "Backspace" || k == "Delete" || kCode == 8 || kCode == 46)
	{
		console.log("hey baby");
		constellation.pop();
		renderGalaxy();
	}
}

c.onmousemove = mov;
c.onmousedown = down;
c.onmouseup = up;
window.onkeydown = kdown;


const butt = document.querySelector('button');

butt.onclick = function() {
	constellation = [];
	createGalaxy();
}