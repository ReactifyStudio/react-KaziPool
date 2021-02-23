import React,{Fragment} from 'react';
// import Jumbotron from '../components/Jumbotron';
import JobCard from '../components/JobCard';
import Header from '../components/Header'

import Footer from '../components/Footer';
import './home.css'

function HomePage() {
  return (
    <Fragment>
      <div>
      <Header/>
      {/* <Jumbotron/> */}
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <h1>Trending Jobs <i class="fas fa-fire"></i> </h1>
      </div>
      <JobCard/>

      <Footer/> 
      </div>       
    </Fragment>
  );
}

export default HomePage;