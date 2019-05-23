import '../styles/App.css';
import React, { Component } from 'react';
import Header from './Header';
import Cities from './Cities';
import '../styles/Media.css';

class App extends Component {
  state = {
    country : ''
  }

  handleInputHeader = (country)=>{
    const countryName = country.toLowerCase();
    if(countryName === "poland") this.setState({country: "PL"})
    else if(countryName === "germany") this.setState({country: "DE"})
    else if(countryName === "spain") this.setState({country: "ES"})
    else if(countryName === "france") this.setState({country: "FR"})
    else this.setState({country: ''})
  }
  render() {
    return (
      <div>
        <Header handleInputHeader = {this.handleInputHeader}/>
        {this.state.country && <Cities country = {this.state.country}/>}
      </div>
    );
  }
}

export default App;

