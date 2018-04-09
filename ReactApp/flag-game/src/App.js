import React, { Component } from 'react';
import './App.css';
import worldImg from './world.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      fourCountries: [],
      correctCountry: "",
      flagImage: "",
      selectedCountry: "",
      gameState: "start"
    };
    this.newGame = this.newGame.bind(this);
    this.random = this.random.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  random() {
    let randomNumbers = [];
    for (let i = 0; i <= 100; i++) {
      randomNumbers.push(Math.floor(Math.random()*this.state.countries.length));
    }
    randomNumbers = new Set(randomNumbers);
    return Array.from(randomNumbers).slice(0,4);
  }
  
  handleSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    if (this.state.selectedCountry === this.state.correctCountry.name) {
      this.setState({gameState: "win"});
    } else {
      this.setState({gameState: "lose"});
    }
  }
  
  handleChange(changeEvent) {
    this.setState({
      selectedCountry: changeEvent.target.value
    });
  }
  
  newGame() {
    const randomCountries = this.random().map(ind => {
      return this.state.countries[ind];
    });
    let correctCountry = randomCountries[Math.floor(Math.random()*randomCountries.length)];
    let flagImage = correctCountry.flag;
    this.setState({fourCountries: randomCountries, correctCountry: correctCountry, flagImage: flagImage, gameState: "guess", selectedCountry: ""});
  }
  
  componentDidMount() {
    const allCountriesURL = "https://restcountries.eu/rest/v2/all";
    const oneCountryURL = "https://restcountries.eu/rest/v2/alpha/";
    
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
    let views = null;
    let button = null;
    if (this.state.countries && this.state.countries.length !== 0) {
      if (this.state.gameState === "guess") {
        views = <div style={{marginTop: '15px'}}>
          <form className = "flag-form" onSubmit = {this.handleSubmit}>
            <div className = "option-block">
              {this.state.fourCountries.map(country => {
                return (
                  <div className = "flag-option">
                    <label>    
                      <input type = "radio" value = {country.name} 
                              checked = {this.state.selectedCountry === country.name}
                              onChange = {this.handleChange}
                              key = {country.alpha3Code}/>
                      {country.name}
                    </label>
                  </div>
                );
              })}
            </div>
            <button className = "btn" type = "submit">Submit</button>
          </form>
        </div>;
      } else if (this.state.gameState === "start") {
        button = <button className = "btn" onClick = {this.newGame}>Start the Game!</button>;
      } else if (this.state.gameState === "win") {
        views = <div className='flag-answer'>
            <p>Correct!: {this.state.correctCountry.name}</p>
            <button className = "btn" onClick = {this.newGame}>New Game!</button>
          </div>;
      } else {
        views = <div className='flag-answer'>
            <p>Incorrect!: {this.state.correctCountry.name}</p>
            <button className = "btn" onClick = {this.newGame}>New Game!</button>
          </div>;
      }
    }
    
    return (
      <div className="flag-app">
        <header
          className="title-header"
          style={{ backgroundImage: `url(${worldImg})` }}>
          <h1 className="title-text">Guess The Flag</h1>
        </header>
        {views}
        {button}
        <img className="flag-img" src = {this.state.flagImage} alt = ""/>
      </div>
    );
  }
}

export default App;