// let h1Elem = document.getElementById('title')

// h1Elem.addEventListener('click' , function(){
//     // h1Elem.setAttribute('class' , 'red')

//     // h1Elem.classList.add('text-red')
//     // h1Elem.classList.remove('text-2xl')

//     h1Elem.classList.toggle('text-2xl')
// })

// let colorArray = ['red' , 'yellow' , 'green' , 'blue' , 'gray' , 'pink']
// let randomColorIndex


// setInterval(function() {
//     randomColorIndex = Math.floor(Math.random() * colorArray.length)
//     document.body.style.backgroundColor = colorArray[randomColorIndex]

// } , 2000)
// ------------------------------------------------------------------------------------------------------------//

// let redValue , greenValue , blueValue

// setInterval(function() {

//     redValue = Math.floor(Math.random() * 255)
//     greenValue = Math.floor(Math.random() * 255)
//     blueValue = Math.floor(Math.random() * 255)

//     document.body.style.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')'
// } , 2000)


let countriesSelectbox = document.getElementById('countries')

function changesHandler(){
    console.log(countriesSelectbox.value)
}
