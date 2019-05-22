import React, { Component } from 'react';
import '../styles/Header.css';


class Header extends Component {
    state = {
        text:''
    }
    
    handleChange = e => {
        this.setState({
            text: e.target.value
        })
        this.props.handleInputHeader(e.target.value);
    }
    render() {
        return (
            <div className="header">
                <label htmlFor="text">Country: 
                    <input type="text" list="countries" value={this.state.text} onChange = {this.handleChange}/>
                    <datalist id="countries">
                        <option value="Poland"/>
                        <option value="Germany"/>
                        <option value="Spain"/>
                        <option value="France"/>
                    </datalist>
                </label>
                
            </div>
        );
    }
}

export default Header;
