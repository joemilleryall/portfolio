import React from 'react';
import ReactDOM from 'react-dom';
import "../stylesheets/calendar.css";
import "../stylesheets/animations.css";
import "../stylesheets/index.css";
import { Calendar } from './Calendar/Calendar.js';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    easing: 'ease-in-out',
    duration: 100,
    once: true
})

const calendarDiv = document.querySelector('#calendar');
const calBtn = document.querySelector('#cal-btn');

calBtn.onclick = () => {

    if (calendarDiv.style.display === "none" || !calendarDiv.style.display) {
        calendarDiv.style.display = "block"
        calendarDiv.classList.remove('aos-animate')
        setTimeout(() => {
            calendarDiv.classList.add('aos-animate')
            // window.scrollBy({ 
            //     top: 200, // could be negative value
            //     left: 0, 
            //     behavior: 'smooth' 
            // });
        }, 100);
        
        calBtn.innerText = "CLOSE CALENDAR"
        
        const card = document.querySelector('.card')
        // card.classList.add('shrinkingCard')


    } else {
        calendarDiv.classList.remove('aos-animate')
        const card = document.querySelector('.card')
        // card.classList.remove('shrinkingCard')
        // card.classList.add('shrinkingCardReverse')
        calBtn.innerText = "VIEW CALENDAR"

        setTimeout(() => {
            calendarDiv.style.display = "none"
            calendarDiv.classList.add('aos-animate')
        }, 800);
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Calendar />
    </React.StrictMode>,
    calendarDiv 
); 
