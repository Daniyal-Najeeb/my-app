import React from 'react';
import {
    BrowserRouter as Router,
    Route
}from 'react-router-dom';
import Forms from './FormPractice';
import Clock from './Clock';

const CustomeRoute = () => (
    <div>
        <Router>
            <div>
            <Route exact path='/' component={Forms}>Home</Route>
            <Route path='/Clock' component={Clock}>Clock</Route>
            </div>
        </Router>
    </div>
)


export default CustomeRoute;