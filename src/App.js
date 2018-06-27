import React, { Component, defaultProps } from 'react';
import BuzzList from './BuzzList';
import './App.css';

class App extends Component {
  static defaultProps = {
    framework : ["ionic", "react", "bootstrap", "redux", "express", "mongoose"],
    
    language : ["javascript","typescript","html","css","sass","java","python","c"],

    other : ["git","agile","scrum","docker", "nlp"]

  }

  state = {
    title: 'framework / language / other'
  }

  onClick = () => {
    let word1 = parseInt(Math.random() * this.props.framework.length, 10);
    let word2 = parseInt(Math.random() * this.props.language.length, 10);
    let word3 = parseInt(Math.random() * this.props.other.length, 10);
    let title = this.props.framework[word1] + " / " + this.props.language[word2] + " / " + this.props.other[word3];      
    this.setState({title});
    console.log(title)
    console.log(this.state.title)
  }

  render() {
    return (
      <div className="App">
        <BuzzList
        onClick={this.onClick} 
        title={this.state.title}
        />
      </div>
    );
  }
}

export default App;
