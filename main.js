const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const consumer =$('.consumer-btn')
const customer =$('.customer-btn')
const login =$('.login')
const loginCloseIcon =$('.login-close-icon')

customer.onclick = () => {
    login.classList.add('login-open');
}

loginCloseIcon.onclick = () => {
    login.classList.remove('login-open');
}

