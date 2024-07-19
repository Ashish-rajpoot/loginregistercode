const btnSignupForm = $('.btn-signup-form')
const btnSigninForm = $('.btn-signin-form')
const btnSignupPage = $('.btn-signup-page')
const btnSigninPage = $('.btn-signin-page')
const signupForm = $('.signup-form')
const signinForm = $('.signin-form')
const signupPage = $('.signup-page')
const signinPage = $('.signin-page')
const red = $(".red")
const card = $('.card')
const cardbtn = $('.card-btn')
const body = $('body')

$(document).ready(function () {
    btnSignupForm.on('click', function () {
        toggleActiveClass(signinForm, signupForm, signinPage, signupPage, red)
    })
    btnSigninForm.on('click', function () {
        toggleActiveClass(signinForm, signupForm, signinPage, signupPage, red)
    })
    btnSigninPage.on('click', function () {
        toggleActiveClass(signinForm, signupForm, signinPage, signupPage, red)
    })
    btnSignupPage.on('click', function () {
        toggleActiveClass(signinForm, signupForm, signinPage, signupPage, red)
    })
    cardbtn.hover(function () {
        toggleActiveClass(card)
    }, function () {
        toggleActiveClass(card)
    })
    cardbtn.on('click',function(){
        $('.container').css('display','block')
        card.css('display','none')
    })
})

function toggleActiveClass(...addActiveClass) {
    for (element of addActiveClass) {
        element.toggleClass('active')
    }
}
