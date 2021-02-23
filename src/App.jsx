import React,{Fragment} from 'react';
import './App.css';
import 'boxicons';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Jumbotron from './components/Jumbotron';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';
import F04 from './components/F04'
import BasicDashboard from './components/BasicDashboard';


function App() {
  return (
    <Fragment>
      <Router>
   <Header/>
      <Switch>    
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/contact' component={ContactUs}/>
        <Route exact path='/dashboard' component={BasicDashboard}/>
        <Route exact path='/register' component={RegisterPage}/>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='*' component={F04}/>
        {/* <Route exact path='/j' component={Jumbotron}/> */}

      </Switch>  
      </Router>       
    </Fragment>


  );
}

export default App;