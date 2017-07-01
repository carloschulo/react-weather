import React, { Component } from 'react';
import { fetchWeather } from './utils/api';
import { Search } from './components';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.getWeather = this.getWeather.bind(this);
    this.saveLocal = this.saveLocal.bind(this);
    this.currentSearch = this.currentSearch.bind(this);
    this.state = {
      searched: [],
      current: {}
    }
  }
  componentDidMount() {
    
  }
  
  saveLocal(local){
    const locations = [...this.state.searched]
    locations.push(local)
    this.setState({searched : locations})
  }

  currentSearch(searchResult){
    let current = {...this.state.current};
    current = {};
    this.setState({current: searchResult})
  }

  getWeather(local){
    fetchWeather(local)
      .then(data => {
        console.log(data);
        this.currentSearch(data);
        this.saveLocal(local);
      })
  }
  
  render() {
    return (
      <div className="App">
        <Search 
          getWeather={this.getWeather}
        />
      </div>
    );
  }
}

export default App;
