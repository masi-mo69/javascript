let userNameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')
let modal = document.querySelector('.modal')
let usernameMessage = document.querySelector('.username-validation')
let passwordMessage = document.querySelector('.password-validation')
let loginButton = document.querySelector('.login')

loginButton.addEventListener('click' ,dataValidation)

function dataValidation() {
    let userNameValue = userNameInput.value
    let passwordValue = passwordInput.value

    if(userNameValue.length > 12 || passwordValue.length > 8){

        modal.style.display = 'inline'
         modal.style.background = 'red'
        modal.innerHTML = 'لطفا اطلاعات را به درستی وارد نمایید'
    } else {
        modal.style.display = 'inline'
        modal.style.background = 'green'
        modal.innerHTML = 'لاگین با موفقیت انجام شد'
    }
    setTimeout(function() {
        modal.style.display = 'none'
    }, 3000);
}

userNameInput.addEventListener('keydown' ,usernameValidation)
passwordInput.addEventListener('keydown' ,passwordValidation)

function usernameValidation(){
    if(userNameInput.value.length < 12){
        usernameMessage.style.color = 'red'
        usernameMessage.innerHTML = 'Most Contain 12 Character (Min)'
        usernameMessage.style.display = 'inline'
    } else {
        usernameMessage.style.color = 'green'
        usernameMessage.innerHTML = 'Correct Username Value'
        usernameMessage.style.display = 'inline'
    }
}

function passwordValidation(){
    if(passwordInput.value.length < 8){
        passwordMessage.style.color = 'red'
        passwordMessage.innerHTML = 'Most Contain 8 Character (Min)'
        passwordMessage.style.display = 'inline'
    } else {
        passwordMessage.style.color = 'green'
        passwordMessage.innerHTML = 'Correct Username Value'
        passwordMessage.style.display = 'inline'
    }
}
