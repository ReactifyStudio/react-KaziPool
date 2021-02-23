import React,{Fragment} from 'react';
// import Jumbotron from '../components/Jumbotron';
import JobCard from '../components/JobCard';
import Header from '../components/Header'

import Footer from '../components/Footer';

function HomePage() {
  return (
    <Fragment>
      <div>
      <Header/>
      {/* <Jumbotron/> */}
      <div>
      
      </div>
      <JobCard/>

      <Footer/> 
      </div>       
    </Fragment>
  );
}

export default HomePage;