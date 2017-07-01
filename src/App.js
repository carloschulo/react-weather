import React, { Component } from 'react';
import { fetchWeather } from './utils/api';
import { Search, Card, SearchList, Results } from './components';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.getWeather = this.getWeather.bind(this);
    this.saveLocal = this.saveLocal.bind(this);
    this.currentSearch = this.currentSearch.bind(this);
    this.state = {
      searched: [],
      current: null
    }
  }

  componentWillMount() {
    const localStorageRef = localStorage.getItem('searched');
    if(localStorageRef){
      // console.log('local storage: ', localStorageRef)
      this.setState({ searched: JSON.parse(localStorageRef)})
    } else {
      console.log('no local storage')
    }
  }
  
  componentWillUpdate(nextProps, nextState) {
    //save search results to local storage
    const searched = JSON.stringify(nextState.searched)
    localStorage.setItem('searched', searched)
  }
  
  saveLocal(local){
    const locations = [...this.state.searched]
    locations.push(local)
    this.setState({searched : locations})
  }

  currentSearch(searchResult){
    // let current = {...this.state.current};
    // current = {};
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
        <div className="App-column">
        
            <Search 
              getWeather={this.getWeather}
            />
            {!this.state.current ? null : 
              <Card>
                <Results current={this.state.current}/>
              </Card>
          }
        </div>
        <div className="App-column">
          <Card width={200}>
            <SearchList 
            list={this.state.searched}
            />
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
