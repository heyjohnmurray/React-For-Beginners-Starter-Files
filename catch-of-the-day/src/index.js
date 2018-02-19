import React from 'react';
import {render} from 'react-dom';

// import StorePicker component
import StorePicker from './components/StorePicker';

// instantiate component's tag and select where we're mounting the component
render (<StorePicker/>, document.querySelector('#main'));
