const year = +prompt('In what year were you born?');
const userAge = (2023 - year);
const city = prompt('In what city were you born?');

const sport = prompt('What is your favorite sport?');

if(isNaN(year) || year === 0 || year === null) {
		alert("It is a pity that you did not enter your year of birth!!!")
} else {
		alert(`You are ${userAge} years old!!!`);
}

if(city === 'Kyiv' || city === 'kyiv') {
		alert(`Great, you live in ${city}, its a capital of Ukraine!!!`)
} else if(city === 'Washington' || city === 'washington') {
		alert(`Great, you live in ${city}, its a capital of USA!!!`)
} else if(city === 'London' || city === 'london') {
		alert(`Great, you live in ${city}, its a capital of Great Britain!!!`)
} else if (city === "" || city === null) {
		alert("It is a pity that they did not enter their city!!!")
} else {
    alert(`Nice, you live in ${city}`);
}


if(sport === 'futball' || sport === 'football' || sport === 'Football' || sport === 'Futball') {
		alert('Perfect, you want to be like Andrey Voronin?')
} else if(sport === 'box' || sport === 'Box') {
		alert('Perfect, you want to be like Alexandr Usyk?')
} else if(sport === 'tennis' || sport === 'Tennis') {
		alert('Perfect, you want to be like Elina Svitolina?')
} else if(sport === "" || sport === null) {
		alert('It is a pity that they did not introduce their favorite sport!!!')
}else {
		alert(`Great, you can achieve heights in ${sport}!!`)
}