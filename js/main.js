// DOM Elements
const time = document.getElementById('time'),
    greetings = document.getElementById('greetings'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus')

// Options
const showAmPm = true

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        minutes = today.getMinutes(),
        seconds = today.getSeconds()

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM'

    // Set 12 Hour Format
    hour = hour % 12 || 12

    // Output the Time
    time.innerHTML = `${hour}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)} ${showAmPm ? amPm : ''}`

    setTimeout(showTime, 1000);
}

// Add Zero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n
}

// Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours()
    
    if(hour < 12) {
        document.body.style.backgroundImage = 'url("../img/bg-1.jpg")'
        greetings.textContent = 'Good Morning'
    } else if(hour < 18) {
        document.body.style.backgroundImage = 'url("../img/service-bg-4.jpg")'
        greetings.textContent = 'Good Afternoon'
        document.body.style.color = 'white'
    } else {
        document.body.style.backgroundImage = 'url("../img/video-area-bg.jpg")'
        greetings.textContent = 'Good Evening'
        document.body.style.color = 'white'
    }   
}

// Get Name
function getName() {
    if(localStorage.getItem('name') === null){
        name.textContent = '{Enter Name}'
    } else {
        name.textContent = localStorage.getItem('name')
    }
}

// Set Name 
function setName(e) {
    if(e.type === 'keypress') {
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('name', e.target.innerText)
        name.blur()
        }
    } else {
        localStorage.setItem('name', e.target.innerText)
    }
}

// Get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null){
        focus.textContent = '{Enter Focus}'
    } else {
        focus.textContent = localStorage.getItem('focus')
    }
}

// Set Name 
function setFocus(e) {
    if(e.type === 'keypress') {
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('focus', e.target.innerText)
        focus.blur()
        }
    } else {
        localStorage.setItem('focus', e.target.innerText)
    }
}

// Set Event
name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)
focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)

showTime()
setBgGreet()
getName()
getFocus()