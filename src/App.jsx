import React,{Fragment} from 'react';
import './App.css';


import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ButtonIcon from './components/ButtonIcon'
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Home from './pages/HomePage'
import ClientDashboardPage from './pages/client-personel/ClientDashboardPage';
import ExpertDashboar from './pages/expert/ExpertDashboar';

function App() {
  return (
    <Fragment>
      <Header/>
      <Jumbotron/>
      <ButtonIcon/>
      <RegisterPage/>
      <LoginPage/>
      <HomePage/>
      <ClientDashboardPage/>
      <ExpertDashboar/>

    </Fragment>
  );
}

export default App;