import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class BidList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clientName: (new URLSearchParams(window.location.search)).get("clientname"),
            listings:[]
        };
    }

    componentDidMount() {
        // Simple POST request with a JSON body using axios
        const packets = {
            clientName: this.state.clientName
        }
        axios.post('/viewbids',packets)
            .then(response => this.setState({ listings: response.data }))
            .catch(error => {
                console.log("ERRRR:: ",error.response.data);
                
                });
    }

    render() {
        const { listings } = this.state;
        return (
<div className='container py-4'>
<div className='row justify-content-center'>
  <div className='col-md-8'>
    <div className='card dash'>
      <div className='card-header'><h2>Bid List</h2></div>
      <div className='card-body'>
        <ul className='list-group list-group-flush'>
        {listings.map(list => (
        <Link className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
              to={`/assign?bidID=${list.bidID}&bidName=${list.jobTitle}&bidTime=${list.created_at}&biddername=${list.expertName}`}
              key={list.id}>
                  <li>{list.jobTitle}</li>
                  <li>Bidded by: {list.expertName}</li>
                  <li>Time: {list.created_at}</li>
                        </Link>
          )) }
        </ul>
      </div>
    </div>
  </div>
</div>
</div>
        );
    }
}

export default BidList;