import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar } from './Calendar/Calendar.js';


ReactDOM.render(
    <React.StrictMode>
        <Calendar />
    </React.StrictMode>, 
document.querySelector('#calendar')); 


import "../stylesheets/calendar.css";
import "../stylesheets/animations.css";
import "../stylesheets/index.css";


// console.log("test")