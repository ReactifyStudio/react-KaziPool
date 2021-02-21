import React,{Fragment} from 'react';
import Header from '../components/Header';
import JobCard from '../components/JobCard'
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <Fragment>
      <Header/>
      <JobCard/>
      <HowItWorks/>
      <Footer/>        
    </Fragment>
  );
}

export default HomePage;