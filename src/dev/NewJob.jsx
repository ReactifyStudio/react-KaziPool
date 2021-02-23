import React, { Component } from 'react';
import axios from "axios";

class NewJob extends Component {

    constructor(props){
        super(props);

        this.state = {
            name : '',
            description : '',
            category : 'Information Technology'
        }

        this.takeName = this.takeName.bind(this);
        this.takeCategory = this.takeCategory.bind(this);
        this.takeDescription = this.takeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    takeName(event){
        this.setState({name : event.target.value})
    }
    takeCategory(event){
        this.setState({category : event.target.value})
    }
    takeDescription(event){
        this.setState({description : event.target.value})
    }
    handleSubmit(){
    
        const packets = {
            name:  this.state.name,
            category: this.state.category,
            description: this.state.description
        };
        alert(JSON.stringify(packets))
        axios.post('/jobs', packets)
        //history.push('/')
            .then(response => console.log(response))
            .catch(error => {
                console.log("ERRRR:: ",error.response.data);
                
                });
    }

    render(){
        return (
            <div className='container py-4'>
            <div className='row justify-content-center' >
              <div className='col-md-6' >
                <div className='card dash'>
                  <div className='card-header'>Add new job</div>
                  <div className='card-body'>
                        <form>
                            <div className='form-group'>
                            <label htmlFor="">Category</label>
                                <select onChange={this.takeCategory} name="userLevel">
                                    <option value="Agriculture">Agriculture</option>
                                    <option value="Building and Construction">Building and Construction</option>
                                    <option value="Laundry">Laundry</option>
                                    <option value="Information Technology">Information Technology</option>
                                </select>
                            </div>
                            <div className='form-group'>
                            <label>Job Title</label>
                            <input type="text" name="firstname"
                            onChange={this.takeName}
                            placeholder="Job Name"
                            />
                            </div>
                            <div className='form-group'>
                            <label htmlFor="">Description</label>
                            <textarea type="text" name="lastname" 
                            onChange={this.takeDescription} placeholder="A Brief detailed description"
                            ></textarea>
                            </div>
                            

                            <div className='form-group'>
                            <button type="submit" className='btn btn-primary' onClick={this.handleSubmit}>
                                ADD <i class="fas fa-plus-square"></i>
                            </button>
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
export default NewJob;