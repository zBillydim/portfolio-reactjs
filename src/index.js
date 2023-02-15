import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Typography from './ components/Typography/index';
import Background from'./ components/Background/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <div >
     <Typography class='center' name='Hi i am Gabriel Costa ;)'></Typography>
     <Typography class="center" name='backend developer'></Typography>
   
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
