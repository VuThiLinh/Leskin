// Mở form đăng ký
const openBtnRes = document.querySelector('.js-register')
const modalRes = document.querySelector('.js-modal')

function showRegister(){
    modalRes.classList.add('open')
}
openBtnRes.addEventListener('click', showRegister)

// Đóng form đăng ký
const closeRes = document.querySelector('.js-close')

function hideRegister(){
    modalRes.classList.remove('open')
}
closeRes.addEventListener('click', hideRegister)

// Mở form đăng nhập
const openBtnLogin = document.querySelector('.js-login')
const modalLogin = document.querySelector('.js-modal-login')


function showLogin(){
    modalLogin.classList.add('open')
}
openBtnLogin.addEventListener('click', showLogin)

// Đóng form đăng nhập
const closeLogin = document.querySelector('.js-close-login')

function hideLogin(){
    modalLogin.classList.remove('open')
}
closeLogin.addEventListener('click', hideLogin)



