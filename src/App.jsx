import React,{Fragment} from 'react';
import './App.css';
import 'boxicons';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
// import ButtonIcon from './components/ButtonIcon';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import HomePage from './pages/HomePage';
// import ClientDashboardPage from './pages/client-personel/ClientDashboardPage';
import ExpertDashboard from './pages/expert/ExpertDashboard';
import Footer from './components/Footer';
import BasicDashboard from './components/BasicDashboard';
import LandingJobsCard from './components/LandingJobsCard'
import CardLoops from './components/CardLoops'

function App() {
  return (
    <Fragment>
      <Router>
        

      <Header/> 

      <Switch>    
        {/* <Route exact path='/' component={HomePage}/> */}
        <Route exact path='/dashboard' component={BasicDashboard}/>
        <Route exact path='/signup' component={RegisterPage}/>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/j' component={Jumbotron}/>
      </Switch>
      {/* <LandingJobsCard/> */}
      <CardLoops/>
      <br/><br/><br/><br/><br/>

      <Footer/>

      </Router>      
    </Fragment>


  );
}

export default App;