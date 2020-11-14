import React,{Component} from 'react';
import {render} from 'react-dom';
//import store from './store';
//import {createStore,applyMiddleware} from 'redux'
//import {Provider} from 'react-redux';
import DashBoard from './components/DashBoard'
//import Routes from './components/Routes';
//import thunk from 'redux-thunk';
//import { createLogger } from 'redux-logger'
//import './style.css'

class App extends Component{
   
    

    render(){
        return(
            //  <Provider >
            //     <Routes/>
            // </Provider>
            <div>
                {/* <h1>jedfqjehdkljw</h1> */}
                <DashBoard />
            </div>
        )
    }
}
export default App