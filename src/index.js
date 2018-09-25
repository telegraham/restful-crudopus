import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

document.addEventListener("DOMContentLoaded", function(){
  const html = document.getElementsByTagName("html")[0];
  document.addEventListener("wheel", function(){
    const leeway = html.scrollHeight - html.clientHeight;
    const className = (html.scrollTop > leeway / 2) ? "bottom" : "top";
    html.className = className;
  });
});