
PersonCounter = 0

class person {
	constructor(name,sex,age,height,weight,activity,fatPercent,protRat,carbRat,enerProt){
		this.id = PersonCounter
		PersonCounter += 1
		this.name = name
		this.sex = sex
		this.age = age
		this.height = height
		this.weight = weight
		this.activity = activity
		this.fatPercent = fatPercent
		this.protRat = protRat
		this.carbRat = carbRat
		this.enerProt = enerProt
		this.statUpdate()
	}
	statUpdate(){
		if (this.sex = "female") {
			this.bmr = (655 + 4.35*this.weight + 4.7*this.height - 4.7*this.age)
		} else	{
			this.bmr = (66 + 6.23*this.weight + 12.7*this.height - 6.8*this.age)
		}
		if (this.activity = 1) {
			this.dlyCal = this.bmr *1.2
		} 	else if (this.activity = 2) 	{
			this.dlyCal = this.bmr *1.375
		} 	else if (this.activity = 3)	{
			this.dlyCal = this.bmr *1.55
		}	else if (this.activity = 4)	{
			this.dlyCal = this.bmr *1.725
		}

		this.weightFat = this.weight * this.fatPercent
		this.leanMass = this.weight - this.weightFat
		this.protNeed = this.leanMass * this.protRat
		this.enerNeed = this.dlyCal - ((this.protNeed*4)*this.enerProt)
		this.carbNeed = (this.enerNeed * this.carbRat) / 4
		this.fatNeed = (this.enerNeed - (this.carbNeed*4)) / 9

		this.weekCarb = Math.floor(this.carbNeed * 7)
		this.weekFat = Math.floor(this.fatNeed * 7)
		this.weekProt = Math.floor(this.protNeed * 7)
	}
	loadData() {
		document.getElementById("line1").innerHTML = "These are the nutritional requirements of " + this.name
		document.getElementById("line2").innerHTML = "Weekly Carbs: " + this.weekCarb
		document.getElementById("line3").innerHTML = "Weekly Fat: " + this.weekFat
		document.getElementById("line4").innerHTML = "Weekly Protein: " + this.weekProt
	}
	consoleData() {
		console.log(this.name + "'s Weekly Nutrient Needs")
		console.log("Weekly Carbs: ", this.weekCarb)
		console.log("Weekly Fat: ", this.weekFat)
		console.log("Weekly Protein: ", this.weekProt)
		console.log("Daily Carbs: ", this.carbNeed)
		console.log("Daily Fat: ", this.fatNeed)
		console.log("Daily Prot: ", this.protNeed)
		console.log("Bon Appetit!")
		console.log("Number of People: " + PersonCounter)
		console.log("Number of Foods: " + FoodCounter)
	}
}

FoodCounter = 0

class food {
	constructor(name,servSize,servUnits,carb,fat,prot) {
		this.foodId = FoodCounter
		FoodCounter += 1 
		this.name = name
		this.servSize = servSize
		this.servUnits = servUnits
		this.carb = carb
		this.fat = fat
		this.prot = prot
		this.servNum = 0
	}

	addServing(){
		this.servNum += 1
	}

	subServing(){
		this.servNum -= 1
	}
}

function getName() {
	return document.getElementById("name").value
}

function formSubmitted(){
	dabber = new person(document.getElementById("name").value, document.getElementById("sex").value, document.getElementById("age").value, document.getElementById("height").value, document.getElementById("weight").value, document.getElementById("activity").value, document.getElementById("fatPercent").value, document.getElementById("protRat").value, document.getElementById("carbRat").value); 
	dabber.loadData()
}

function loadData()	{
		document.getElementById("line1").innerHTML = "These are the nutritional requirements of " + john.name
		document.getElementById("line2").innerHTML = "Weekly Carbs: " + john.weekCarb
		document.getElementById("line3").innerHTML = "Weekly Fat: " + john.weekFat
		document.getElementById("line4").innerHTML = "Weekly Protein: " + john.weekProt
}

john = new person("John","male",21,74,205,2,0.17,1,0.2,1);
okra = new food("Okra",1,"oz",6,0.5,3);

loadData
john.consoleData()