// let's go!
// console.log('hello, world');

import React, { Component } from 'react';
import { render } from 'react-dom';
import './css/style.css';
// why do some imports have curly brackets and some don't?
import StorePicker from './components/StorePicker';

// mounting our app
// alllows to render component to the DOM
render(<StorePicker />, document.querySelector('#main'));