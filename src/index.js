import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import { Calendar } from './Calendar/Calendar.js';
import { Bio } from './Bio/Bio.js';
import resume  from "../assets/joeMillerResume.pdf";
import 'aos/dist/aos.css';
import "../stylesheets/bio.css";
import "../stylesheets/calendar.css";
import "../stylesheets/index.css";

AOS.init({
    easing: 'ease-in-out',
    duration: 100,
    once: true
})
console.log('%c=========/////////////============', 'color:red')
console.log(resume)
console.log('%c=========\\\\\\\\\\\\\\\\\\\\\\\\\============', 'color:red')

const resumeLink = document.querySelector("#resume-link")
resumeLink.setAttribute('href', resume)

// ---------------------------------Calendar Component----------------------

const calendarDiv = document.querySelector('#calendar');
const calBtn = document.querySelector('#cal-btn');
const calBtnClose = document.querySelector('#cal-btn-close');
const back = document.querySelector('.back-info')
const back2 = document.querySelector('.back-info2')


calBtn.onclick = () => {
    calendarDiv.classList.remove('aos-animate')
    back.classList.remove('aos-animate')
    back2.style.display = 'block'
    back2.classList.remove('aos-animate')

    bioBtn.dataset.close = "false"
    bioDiv.classList.remove('aos-animate')
    closeBioTxt.classList.remove('aos-animate')
    moreTxt.classList.remove('aos-animate')

    setTimeout(() => {
        calendarDiv.style.display = "block"
        moreTxt.classList.add('aos-animate')
        bioDiv.style.display = "none"
    }, 100);

    setTimeout(() => {
        closeBioTxt.style.display = 'none'
        moreTxt.style.display = 'block';
        calendarDiv.classList.add('aos-animate')
        back.style.display = 'none'
        back2.classList.add('aos-animate')
    }, 300);
}

calBtnClose.onclick = () => {
    calendarDiv.classList.remove('aos-animate')
    back.classList.remove('aos-animate')
    back2.classList.remove('aos-animate')
    moreTxt.classList.add('aos-animate')


    setTimeout(() => {
        back2.style.display = 'none'
        back.style.display = 'block'
    }, 200);

    setTimeout(() => {
        back2.classList.add('aos-animate')
        back.classList.add('aos-animate')
        calendarDiv.style.display = 'none'
    }, 300);
}

ReactDOM.render(
    <React.StrictMode>
        <Calendar />
    </React.StrictMode>,
    calendarDiv 
); 

// ---------------------------------Bio Component----------------------

const bioDiv = document.querySelector("#bio")
const bioBtn = document.querySelector("#bio-btn")
const moreTxt = document.querySelector("#more-txt")
const closeBioTxt = document.querySelector("#close-bio-txt")

bioBtn.onclick = (e) =>{
    if(e.target.dataset.close === "true" || e.target.id === 'close-bio-txt'){
        bioBtn.dataset.close = "false"
        bioDiv.classList.remove('aos-animate')
        closeBioTxt.classList.remove('aos-animate')
        moreTxt.classList.remove('aos-animate')

        setTimeout(() => {
            closeBioTxt.style.display = 'none';
            moreTxt.style.display = 'block';
        }, 200);
        setTimeout(() => {
            moreTxt.classList.add('aos-animate')
            bioDiv.style.display = "none"
        }, 300);

    } else {
        bioBtn.dataset.close = "true"
        bioDiv.style.display = 'block'
        bioDiv.classList.remove('aos-animate')
        moreTxt.classList.remove('aos-animate')
        closeBioTxt.classList.remove('aos-animate')

        setTimeout(() => {
            bioDiv.classList.add('aos-animate')
        }, 100);
        setTimeout(() => {
            closeBioTxt.style.display = 'block';
            moreTxt.style.display = 'none';
        }, 200);
        setTimeout(() => {
            closeBioTxt.classList.add('aos-animate')
        }, 300);
    }
}


ReactDOM.render(
    <React.StrictMode>
        <Bio />
    </React.StrictMode>,
    bioDiv 
); 