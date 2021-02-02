import React,{Fragment} from 'react';
import './App.css';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Fragment>
        <RegisterPage/>
        <LoginPage/>
    </Fragment>
  );
}

export default App;