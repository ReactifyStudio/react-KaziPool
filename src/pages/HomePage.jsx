import React,{Fragment} from 'react';
// import Jumbotron from '../components/Jumbotron';
import JobCard from '../components/JobCard'

import Footer from '../components/Footer';

function HomePage() {
  return (
    <Fragment>
      {/* <Jumbotron/> */}
     
      <JobCard/>

      <Footer/>        
    </Fragment>
  );
}

export default HomePage;