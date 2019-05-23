import React, { Component } from 'react';
import City from '../components/City';

class Cities extends Component {
    state = {
        cities: []
    }
    
    componentDidMount(){
        const API = "https://api.openaq.org/v1/latest?parameter=pm25&order_by=measurements[0].value&sort=desc&country=";
        const country = this.props.country;
        fetch(API + country)
            .then(response => response.json())
            .catch(error => console.log('Error:', error))
            .then(data => {
                let cities = data.results.map(city => city.city);
                cities = cities.filter((v,i) => cities.indexOf(v) === i)
                cities = cities.slice(0, 10);
                return this.setState({cities})
            });
    }

    render() {
        const CitiesList = [...this.state.cities].map((city, index) => <City name={city} key={index} id={index}/>)
        return (
            <div id="accordion">
               {CitiesList} 
            </div>
        );
    }
}

export default Cities;
