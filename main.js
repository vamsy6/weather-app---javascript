
var button= document.querySelector('.button');
var currentLocation= document.querySelector('.currentLocation');
var inputValue = document.querySelector('.inputValue');
var main = document.querySelector('#name');
var temp = document.querySelector('.tempe');
var desc = document.querySelector('.desc');
var humidity = document.querySelector('.hum');
var wind = document.querySelector('.wind');
var maxtemp = document.querySelector('.max');
var pressure = document.querySelector('.pressure');

//SCROOL REVEAL LIBRARY
ScrollReveal().reveal('.date-month',{delay: 500});
ScrollReveal().reveal('.weatherContainer', { delay: 800});
ScrollReveal().reveal('.temp', { delay: 1100 });

ScrollReveal().reveal('.props', { delay: 1400 }); 

ScrollReveal().reveal('.fa-wind', { delay: 1700});
ScrollReveal().reveal('.fa-thermometer-full', { delay: 2000});
ScrollReveal().reveal('.fa-tint', { delay: 2300 });


//date day year
var d = new Date();
var months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
document.getElementById("month").innerHTML = months[d.getMonth()];

var d = new Date();
document.getElementById("date").innerHTML = d.getDate();


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=422f678a01c825d78fea862f8a72d588')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var humValue = data['main']['humidity'];
	var windValue = data['wind']['speed'];
	var maxtempValue = data['main']['temp_min'];
	var pressureValue = data['main']['pressure'];
  temp.innerHTML = (Math.floor(tempValue - 273.15)) + '°C';
	desc.innerHTML = descValue;
	pressure.innerHTML = 'pressure:' + pressureValue;
	  main.innerHTML = nameValue;
      humidity.innerHTML = humValue + '%';
	  wind.innerHTML = windValue + '%';
	maxtemp.innerHTML =(Math.floor(maxtempValue- 273.15)) + '°C';
})

.catch(err => alert("Wrong city name!"));
})


async function test(){
	const response1 = await fetch('http://ipinfo.io?token=29d3b18ddad899')
	const responseData = await response1.json()

	return responseData.city;
}


currentLocation.addEventListener('click', function(name){

	const response = test()
	response.then(data=>{
		fetch('https://api.openweathermap.org/data/2.5/weather?q='+ data  +'&appid=422f678a01c825d78fea862f8a72d588')
		.then(response => response.json())
		.then(data => {
		var tempValue = data['main']['temp'];
		var nameValue = data['name'];
		var descValue = data['weather'][0]['description'];
		var humValue = data['main']['humidity'];
			var windValue = data['wind']['speed'];
			var maxtempValue = data['main']['temp_min'];
			var pressureValue = data['main']['pressure'];
		temp.innerHTML = (Math.floor(tempValue - 273.15)) + '°C';
			desc.innerHTML = descValue;
			pressure.innerHTML = 'pressure:' + pressureValue;
			main.innerHTML = nameValue;
			humidity.innerHTML = humValue + '%';
			wind.innerHTML = windValue + '%';
			maxtemp.innerHTML =(Math.floor(maxtempValue- 273.15)) + '°C';
		})
		.catch(err => alert(err));
	}).catch(err=>console.log(err))
})

	
	