function finalPopulation() {
	let initialPopulation = prompt("Input intial population: ");
	let rateOfGrowth = prompt("Input rate of growth: ");
	let timeInHours = prompt("Input time in hours: ");
	
	let floatInitialPopulation = parseFloat(initialPopulation);
	let floatRateOfGrowth = parseFloat(rateOfGrowth);
	let floatTimeInHours = parseFloat(timeInHours);
	
	let finalPopulation = Math.round(floatInitialPopulation * Math.pow(Math.E, floatRateOfGrowth * floatTimeInHours));
			
	let regionOfMonster = prompt("Input the region of the monster: ");
	let nameOfMonster = prompt("Input the name of the monster: ");
	let monster = (regionOfMonster.concat(' ').concat(nameOfMonster)).toUpperCase();
	
	document.getElementById('result').innerHTML = ('After' + ' ' + floatTimeInHours + ' ' + 'hours' + ',' + ' ' + 'the population of' + ' ' + monster + ' ' + 'has risen to' + ' ' + finalPopulation + '!');		
}
