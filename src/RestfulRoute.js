import React, { Component } from 'react';

export default function(params){
  return (<li className={ "route " + params.name.toLowerCase() }>
            <h1>{ params.name}</h1>
            <h2>
              <span className="verb">{ params.verb }</span>
              <span className="path">{ params.path }</span>
            </h2>
          </li>);
}

