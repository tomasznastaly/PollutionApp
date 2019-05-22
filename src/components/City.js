import React, { Component } from 'react';

class City extends Component {
    state = {
        description : ''
    }
    
    componentDidMount(){
        const API = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=";
        const city = this.props.name;
        
        fetch(API+city, {mode: "no-cors",
        headers: {  
            'Access-Control-Allow-Credentials' : true,  
            'Access-Control-Allow-Origin': '*',  
            'Access-Control-Allow-Methods':'GET',  
            'Access-Control-Allow-Headers':'application/json',  
             }
        })
          
            .then(data => console.log(data))
            
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
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
                </div>
            </div>
        );
    }
}

export default City;
