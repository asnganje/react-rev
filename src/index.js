//Import react and React DOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//get reference to the div with id root
const el = document.getElementById('root');

//tell react to take control of the div element
const root = ReactDOM.createRoot(el);

//create a react component

//take the react component and show it on the screen
root.render(<App />)