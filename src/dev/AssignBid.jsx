import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AssignBid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    handleSubmit() {
        // Simple POST request with a JSON body using axios
        const packets = {
            bidID:  (new URLSearchParams(window.location.search)).get("bidID")
        };
        alert(JSON.stringify(packets))
        axios.post('/assign',packets)
            .then(response => console.log(response))
            .catch(error => {
                console.log("ERRRR:: ",error.response.data);
                
                });
    }

    render() {
        const jobname = (new URLSearchParams(window.location.search)).get("bidName");
        const expertname = (new URLSearchParams(window.location.search)).get("biddername");
        const bidTime = (new URLSearchParams(window.location.search)).get("bidTime");
        return (
<div className='container py-4 assign-bid'>
<div className='row justify-content-center'>
  <div className='col-md-8'>
    <div className='card dash'>
      <div className='card-header'><h2>Assign Your Bid</h2></div>
      <div className='card-body'>
        <ul className='list-group list-group-flush'>
                  <li>Job name: {jobname}</li>
                  <li>Posted by: {expertname}</li>
                  <li>Time: {bidTime}</li>
        </ul>
        <div className='form-group'>
            <button type="submit" className='btn btn-primary' onClick={this.handleSubmit}>CHOOSE EXPERT</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
        );
    }
}

export default AssignBid;