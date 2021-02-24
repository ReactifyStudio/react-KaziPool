import React from 'react';

function Jumbotron(props) {

    return (
        <div className="container">
            <div className="row space-100">
                <div className="col-lg-7 col-md-12 col-xs-12">
                    <div className="contents">
                        
                        <div className="job-search-form">
                        
                            <form>
                                <div className="row">
                                    <div className="col-lg-5 col-md-5 col-xs-12">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Job Type"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-xs-12">
                                        <div className="form-group">
                                            <div className="search-category-container">
                                                <label className="styled-select">
                                                    <select>  
                                                        <option value="none">Kiambu</option>                                          
                                                        <option value="none">Mombasa</option>
                                                        <option value="none">Murang'a</option>
                                                        <option value="none">Nakuru</option>                                                        
                                                        <option value="none">Nairobi</option>
                                                        <option value="none">Machakos</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <i className="lni-map-marker"></i>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;