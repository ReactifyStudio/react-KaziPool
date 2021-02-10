import React,{Fragment} from 'react';
import './App.css';


import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
// import ButtonIcon from './components/ButtonIcon';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
// import Home from './pages/HomePage'
// import ClientDashboardPage from './pages/client-personel/ClientDashboardPage';
import ExpertDashboard from './pages/expert/ExpertDashboard';

function App() {
  return (
    <Fragment>
      <Header/> <br/><br/><br/><br/><br/><br/>
      <Jumbotron/>
      {/* <ButtonIcon/> */}
      <RegisterPage/>
      <LoginPage/>
      {/* <HomePage/> */}
      {/* <ClientDashboardPage/> */}
      {/* <ExpertDashboard/> */}


    </Fragment>
  );
}

export default App;