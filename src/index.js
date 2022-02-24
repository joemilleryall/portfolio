import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './Sitebase/Home.js';
import resume  from "../assets/joeMillerResume.pdf";
import "../stylesheets/index.css";

console.log('%c=========/////////////============', 'color:red')
console.log(resume)
console.log('%c=========\\\\\\\\\\\\\\\\\\\\\\\\\============', 'color:red')

const app = document.querySelector('#react-container');

ReactDOM.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>,
    app 
); 