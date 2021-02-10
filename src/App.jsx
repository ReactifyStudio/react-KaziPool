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

function App() {
  return (
    <Fragment>
      <Header/> <br/><br/><br/><br/><br/><br/>
      <i class='bx bxs-user-account'></i> 
      <i class='bx bxs-user-account'></i> //Account
<i class='bx bxs-category'></i> //Category
<i class='bx bxs-copyright'></i> //copyright
<i class='bx bx-comment-detail'></i> //comment
<i class='bx bx-refresh'></i> //refresh
<i class='bx bxs-up-arrow-alt'></i> //up arrow
<i class='bx bxs-chevrons-right'></i> // Right arrow
<i class='bx bxl-messenger'></i> //notifs
<i class='bx bxs-trash-alt'></i>
<i class='bx bxs-toggle-right'></i>
<i class='bx bxs-toggle-left'></i>
<i class='bx bxs-star'></i>
<i class='bx bxs-send'></i>
<i class='bx bxs-phone-call'></i>
<i class='bx bxs-phone'></i>
<i class='bx bx-notification'></i>
<i class='bx bx-menu'></i>
      <Jumbotron/>
      {/* <ButtonIcon/> */}
      <RegisterPage/>
      <LoginPage/>
      {/* <HomePage/> */}
      {/* <ClientDashboardPage/> */}
      {/* <ExpertDashboard/> */}
<Footer/>
      <button style={{padding:'0.8rem 1.2rempx', color:'green', background:'blue'}}><i class='bx bxs-phone'></i>Call</button>

    </Fragment>


  );
}

export default App;