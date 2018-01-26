import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
//import HelloWorld from './App.js';
//import Method from './Method';
//import Clock from './Clock';
//import MyEvents from './Events'
import Forms from './FormPractice';
import Route from './Route';

//import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

var links = 
            <div>
                    {/* <Clock />
                     <HelloWorld link='http://www.facebook.com' linktext='Facebook'/><br/>
                     <HelloWorld link='http://www.youtube.com' linktext='Youtube'/><br/>
                     <Method/>
                    <MyEvents />*/}
                    <Forms />
                     
            </div>
            

ReactDOM.render(<Route />, document.getElementById('root'));
//registerServiceWorker();
