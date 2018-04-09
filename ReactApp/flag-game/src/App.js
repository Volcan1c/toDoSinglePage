import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }
  
  componentDidMount() {
    const allCountriesURL = "https://restcountries.eu/rest/v2/all";
    const oneCountryURL = "https://restcountries.eu/rest/v2/alpha/"
    
    fetch(allCountriesURL)
      .then(data => data.json())
      .then(data => data.map(result => {
        const url = `${oneCountryURL}${result.alpha3Code}`;
        return fetch(url).then(d => d.json());
      }))
      .then(promises => Promise.all(promises))
      .then(countries => this.setState({countries}));
  }
  
  render() {
    let views = this.state.countries.map(country => {
      return <p key = {country.alpha3Code}>{country.name} </p>;
    });
    return (
      <p>{views}</p>
    );
  }
}

export default App;
