import React,{Fragment} from 'react';
import './App.css';
import 'boxicons';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
// import ButtonIcon from './components/ButtonIcon';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
// import Home from './pages/HomePage';
// import ClientDashboardPage from './pages/client-personel/ClientDashboardPage';
import ExpertDashboard from './pages/expert/ExpertDashboard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
      <Router>
      <Navbar/>
      {/* <Header/>  */}
      <Jumbotron/>
      {/* <ButtonIcon/> */}
      <RegisterPage/>
      <LoginPage/>
      {/* <HomePage/> */}
      {/* <ClientDashboardPage/> */}
      {/* <ExpertDashboard/> */}
      <center>
      <Footer/>
      </center>
      <Switch>
        <Route to='/'/>
      </Switch>
      </Router>
      
    </Fragment>


  );
}

export default App;