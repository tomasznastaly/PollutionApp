import React, { Component } from 'react';
import City from '../components/City';

class Cities extends Component {
    state = {
        cities: []
    }
    
    componentDidMount(){
        const API = "https://api.openaq.org/v1/cities?order_by=count&sort=desc&limit=10&country=";
        const country = this.props.country;
        fetch(API + country)
            .then(response => response.json())
            .then(data => this.setState(prevState => ({cities: prevState.cities.concat(data.results)})));
    }

    render() {
        const CitiesList = [...this.state.cities].map((city, index) => <City name={city.city} key={index} id={index}/>)
        return (
            <div id="accordion">
               {CitiesList} 
            </div>
        );
    }
}

export default Cities;
