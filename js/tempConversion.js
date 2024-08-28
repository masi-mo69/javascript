let $ = document

const firstValue = $.querySelector('.C')
const secondValue = $.querySelector('.F')
const converter = $.getElementById('#converter')
const result = $.querySelector('.result')
const convertButton = $.querySelector('.convertButton')
const resetButton = $.querySelector('.resetButton')
const changeButton = $.querySelector('.changeButton')



function convert(){

}

function reset(){

}

function swap(){
    // console.log('change')
    if(firstValue.innerHTML === '°C'){
        firstValue.innerHTML = '°F'
        secondValue.innerHTML ='°C'
        converter.setAttribute('placeholder', '°F')
        document.title = 'SalzLearn| Js | °F to °C'
    } else {
        firstValue.innerHTML = '°C'
        secondValue.innerHTML ='°F'
        converter.setAttribute('placeholder' , '°C')
        document.title = 'SalzLearn| Js | °C to °F'
    }
}


convertButton.addEventListener('click' , convert)
resetButton.addEventListener('click' , reset)
changeButton.addEventListener('click' , swap)
