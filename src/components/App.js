import React, { PropTypes, Component } from 'react';
import DataModel from './DataModel';

export default class App extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  state = {
    rocks: true
  }

  handleClick = () => {
    this.setState({
      rocks: !this.state.rocks
    });
  }

  render() {
    const rocks = this.state.rocks ? ' Rocks' : '';
    const greeting = `Hello, ${this.props.name} ${rocks} (click me)!`;

    return (
      <div className="colorBackground">
        <span onClick={this.handleClick}><h1>{greeting}</h1></span>
        <DataModel source="https://www.reddit.com/r/pics/top/.json"  />
      </div>  
    );  
  }
}