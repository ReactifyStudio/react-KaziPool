import React,{Fragment} from 'react';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import JobCard from '../components/JobCard'
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <Fragment>
      <Header/>

      <h1>SECTION FOR SHOWCASE IMAGE ETC..</h1>
      <p>dev in progress</p>
      <Jumbotron/>

      <JobCard/>
      <HowItWorks/>
      <Footer/>        
    </Fragment>
  );
}

export default HomePage;