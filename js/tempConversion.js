let $ = document

const firstValue = $.querySelector('.C')
const secondValue = $.querySelector('.F')
const converter = $.querySelector('#converter')
const result = $.querySelector('.result')
const convertButton = $.querySelector('.convertButton')
const resetButton = $.querySelector('.resetButton')
const changeButton = $.querySelector('.changeButton')


function convert(){
    // console.log('convert');
    if(converter.value === ''){
        result.innerHTML = 'Insert Correct Value'
        result.style.color = '#993300'
    } else {
        if(firstValue.innerHTML === '°C'){
            let resultValue = (converter.value * 1.8) + 32
            result.innerHTML = converter.value + '°C To ' + resultValue + '°F'

        }
    }
}
function reset(){
    // console.log('reset');
    result.innerHTML = ''
    converter.value = ''
}
function swap(){
    // console.log('swap');
    if(firstValue.innerHTML === '°C'){
        firstValue.innerHTML = '°F'
        secondValue.innerHTML ='°C'
        converter.setAttribute('placeholder' , '°F')
        document.title = 'SalzLearn| Js | °F to °C'
        

    } else {
        firstValue.innerHTML = '°C'
        secondValue.innerHTML = '°F'
        converter.setAttribute('placeholder' , '°C')
        document.title = 'SalzLearn| Js | °C to °F'

    }
}


convertButton.addEventListener('click' , convert)
resetButton.addEventListener('click' , reset)
changeButton.addEventListener('click' , swap)