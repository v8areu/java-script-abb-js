//This program will cal-culate total price of an arbitrary phone purchase

//first, prompt to see the account balance

var spendingAmount = 0;
var countPhone = 0;
var countAccessory = 0;

function calculateTax(price, tax_rate) {
	return price*tax_rate;
}

function buyPhoneAndThings() {
	var moneyBalance = prompt("Whatcha account balance, sir, in Rupiah:");
	//	console.log(moneyBalance);
	//calculate loop
	const PHONE_PRICE = 1575000;
	const MENTAL_THRESHOLD = 4800000;
	const TAX_RATE = 0.05;
	const ACCESSORY_PRICE = 85000;

	do {
		spendingAmount += PHONE_PRICE;
		countPhone += 1;

		spendingAmount += calculateTax(spendingAmount, TAX_RATE);
	
		if (MENTAL_THRESHOLD - spendingAmount >= 0) {
			spendingAmount += ACCESSORY_PRICE;
			countAccessory += 1;

			spendingAmount += calculateTax(spendingAmount, TAX_RATE);
		}
	
	} while (moneyBalance - spendingAmount >= 0);
}

function printThings() {

	var introPara 	= document.createElement("p");
	var textPara	= document.createTextNode("The summary of the phone and things:");
	var divList	= document.getElementById("summary");
	introPara.appendChild(textPara);
	divList.appendChild(introPara);

	//create list in <ul>
	var newTable	= document.createElement("table");
	divList.appendChild(newTable);
	
	//table header
	var td		= document.createElement("td");

	for (var i = 0; i < 2; i++) {
		if (i === 0) {
			var tr = document.createElement("tr");
			for (var j = 0; j < 3; j++) {
				var th = document.createElement("th");
				if (j == 0) {
					th.innerHTML = 'Spending Amount'
				}
				if (j == 1) {
					th.innerHTML = 'Phone Purchased'
				}
				if (j == 2) {
					th.innerHTML = 'Accessory Purchased'
				}
				tr.appendChild(th);
			}
			newTable.appendChild(tr);
		} else if (i === 1) {
			var tr = document.createElement("tr");
			for (var j = 0; j < 3; j++) {
				var td = document.createElement("td");
				if (j == 0) {
					td.innerHTML = String(spendingAmount);
				}
				if (j == 1) {
					td.innerHTML = String(countPhone);
				}
				if (j == 2) {
					td.innerHTML = String(countAccessory);
				}
				tr.appendChild(td);
			}
			newTable.appendChild(tr);

		}
	}

}
