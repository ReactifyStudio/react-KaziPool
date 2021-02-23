import React,{Fragment} from 'react';
// import Jumbotron from '../components/Jumbotron';
import JobCard from '../components/JobCard'

import Footer from '../components/Footer';

function HomePage() {
  return (
    <Fragment>
    <center>
      <h1 style={{fontSize:'3.4rem'}}>IN PROGRESS</h1>

      </center>
      {/* <Jumbotron/> */}
     
      <JobCard/>

      <Footer/>        
    </Fragment>
  );
}

export default HomePage;