let countrySelect = document.querySelector('.countrySelect')
let citySelect = document.querySelector('.citySelect')

let countryData = {
  Iran : ['Tabriz' , 'Tehran' , 'Rasht' , 'Yazd' , 'Semnan'],
  Usa : ['Andalusia' , 'Atmore' , 'Clanton' , 'Huntsville'],
  Turkey : ['Istanbul' , 'Antalya' , 'Izmir' , 'Fethiye']
}

countrySelect.addEventListener('change' , function() {

  if(countrySelect.value === "Please Select"){
    citySelect.innerHTML = ''
    citySelect.innerHTML += "<option>Select City</option>"
 
    
  } else {
    let mainCountrySelect = countrySelect.value
    let mainCitySelect = countryData[mainCountrySelect]
    // console.log(countryData[mainCountrySelect]);
  
    citySelect.innerHTML = ''
    mainCitySelect.forEach(function(city) {
      // console.log(city);
      citySelect.innerHTML += '<option>' + city + '</option>'
      
    });
  }


})
