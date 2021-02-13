import React,{Fragment} from 'react';
import './App.css';
import 'boxicons'


import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
// import ButtonIcon from './components/ButtonIcon';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
// import Home from './pages/HomePage'
// import ClientDashboardPage from './pages/client-personel/ClientDashboardPage';
import ExpertDashboard from './pages/expert/ExpertDashboard';
import Footer from './components/Footer'
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar/>
      {/* <Header/>  */}
      {/* <Jumbotron/> */}
      {/* <ButtonIcon/> */}
      <RegisterPage/>
      <LoginPage/>
      {/* <HomePage/> */}
      {/* <ClientDashboardPage/> */}
      {/* <ExpertDashboard/> */}
      {/* <Footer/> */}
      
    </Fragment>


  );
}

export default App;