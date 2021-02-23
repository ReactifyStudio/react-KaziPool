import React, { Component } from 'react';
import axios from "axios";
import {Link, useLocation} from "react-router-dom";

class NewListing extends Component {
    constructor(props){
        super(props);

        this.state = {
            jobTitle : '',
            jobDescription : '',
            clientName : '',
            clientID : '',
            amount : '',
            jobs : []
        }

        this.takeJobName = this.takeJobName.bind(this);
        this.takeJobDescription = this.takeJobDescription.bind(this);
        this.takeAmount = this.takeAmount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    takeJobName(event){
        this.setState({jobTitle : event.target.value})
        let namePassed = (new URLSearchParams(window.location.search)).get("name")
        let idPassed = (new URLSearchParams(window.location.search)).get("id")  
        this.setState({ clientName: namePassed });
        this.setState({ clientID: idPassed });
    }
    takeJobDescription(event){
        this.setState({jobDescription : event.target.value})
    }
    takeAmount(event){
        this.setState({amount : event.target.value})
    }
    handleSubmit(){
        //console.log(location.state.username);
        //this.setState({ clientName: this.props.location.username });
        //this.setState({ clientID: this.props.location.userID });

        const packets = {
            jobTitle:  this.state.jobTitle,
            jobDescription: this.state.jobDescription,
            clientName: this.state.clientName,
            clientID: this.state.clientID,
            amount: this.state.amount           
        };
        alert(JSON.stringify(packets))
        axios.post('/listnew', packets)
        //history.push('/')
            .then(response => console.log(response))
            .catch(error => {
                console.log("ERRRR:: ",error.response.data);
                
                });
    }
    componentDidMount() {
        // Simple POST request with a JSON body using axios
        axios.post('/jobretrieve')
            .then(response => this.setState({ jobs: response.data }));
    }

    render(){
        const { jobs } = this.state;
        return (
            <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-header'>Add new job</div>
                  <div className='card-body'>
                        <form>
                            <div className='form-group'>
                            <label htmlFor="">Choose Job title</label>
                                <select onChange={this.takeJobName} name="userLevel">
                                    <option value="">Choose a job</option>
                                {jobs.map(job => (
                                    <option value={job.type}>{job.type}</option>
                                        )) }
                                </select>
                            </div>
                            <div className='form-group'>
                            <label htmlFor="">Description</label>
                            <textarea type="text" name="lastname" 
                            onChange={this.takeJobDescription} placeholder="A Brief detailed description"
                            ></textarea>
                            </div>
                            <div className='form-group'>
                            <label>Amount</label>
                            <input type="email" name="firstname"
                            onChange={this.takeAmount}
                            placeholder="Amount to be paid"
                            />
                            </div>
                            <div className='form-group'>
                            <button type="submit" className='btn btn-primary' onClick={this.handleSubmit}>LIST JOB</button>
                            </div>
                        </form>
                    </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default NewListing;