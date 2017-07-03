import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import './search.css';

class Search extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
    this.weather = this.weather.bind(this);
    this.state = {
      value: ''
    }
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  weather(evt){
    evt.preventDefault();
    const city = this.state.value;
    console.log('city', city);
    this.props.getWeather(city);
    this.setState({value:''})
    this.form.reset();
  }

  render() {
    
    return (
      <form className='form' onSubmit={this.weather} ref={(input) => this.form = input}>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Enter City Name to get Weather Info: </ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter City Name"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Enter letters only... No Numbers!</HelpBlock>
        </FormGroup>
      </form>
    );
  }
}

export default Search;