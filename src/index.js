import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './Sitebase/Home.js';
import resume  from "../assets/joeMillerResume.pdf";
import "../stylesheets/index.css";


const app = document.querySelector('#react-container');

ReactDOM.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>,
    app 
); 