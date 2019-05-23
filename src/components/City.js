import React, { Component } from 'react';
import '../styles/City.css';

class City extends Component {
    state = {
        description : ''
    }
    
    componentDidMount(){
        const API = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&indexpageids&titles=";
        const city = this.props.name;
        
        fetch(API + city)
            .then(response => response.json())
            .catch(error => console.log('Error:', error))
            .then(data => {
                const pageids = data.query.pageids;
                const pages = data.query.pages;
                return this.setState({description: pages[pageids].extract })
            })
            
            
    }

    render() {
        const {name, id} = this.props;
        return (
            <div className="card">
                <div className="card-header" id={`heading${id}`}>
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
                        {name}
                    </button>
                </h5>
                </div>

                <div id={`collapse${id}`} className="collapse" aria-labelledby={`heading${id}`} data-parent="#accordion">
                <div className="card-body">
                    {this.state.description ? this.state.description : "No Information" }
                </div>
                </div>
            </div>
        );
    }
}

export default City;
