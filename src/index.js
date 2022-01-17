import React from 'react';
import ReactDOM from 'react-dom';
import "../stylesheets/calendar.css";
import "../stylesheets/index.css";
import resume  from "../assets/nuresume.pdf";
import { Calendar } from './Calendar/Calendar.js';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    easing: 'ease-in-out',
    duration: 100,
    once: true
})

console.log(resume)

const resumeLink = document.querySelector("#resume-link")
resumeLink.setAttribute('href', resume)

const calendarDiv = document.querySelector('#calendar');
const calBtn = document.querySelector('#cal-btn');
const calBtnClose = document.querySelector('#cal-btn-close');
const back = document.querySelector('.back-info')
const back2 = document.querySelector('.back-info2')


calBtn.onclick = () => {
    calendarDiv.style.display = "block"

    calendarDiv.classList.remove('aos-animate')
    setTimeout(() => {
        calendarDiv.classList.add('aos-animate')
    }, 100);

    back.style.display = 'none'
    back2.style.display = 'block'

    back2.classList.remove('aos-animate')
    setTimeout(() => {
        back2.classList.add('aos-animate')
    }, 100);
}

calBtnClose.onclick = () => {
    back2.style.display = 'none'
    back.style.display = 'block'

    back.classList.remove('aos-animate')
    setTimeout(() => {
        back.classList.add('aos-animate')
    }, 100);

    calendarDiv.classList.remove('aos-animate')
    setTimeout(() => {
        calendarDiv.style.display = "none"
        calendarDiv.classList.add('aos-animate')
    }, 800);
}

ReactDOM.render(
    <React.StrictMode>
        <Calendar />
    </React.StrictMode>,
    calendarDiv 
); 
