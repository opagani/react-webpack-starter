import React from 'react';
import DataModel from './DataModel';

export default React.createClass({
  getInitialState() {
    return {
      rocks: true
    }
  },
 
  handleClick() {
    this.setState({
      rocks: !this.state.rocks
    });
  },

  render() {
    const rocks = this.state.rocks ? ' Rocks' : '';
    const greeting = `Hello, ${this.props.name} ${rocks}`;

    return (
      <div className="colorBackground">
        <span onClick={this.handleClick}><h1>{greeting}</h1></span>
        <DataModel source="https://www.reddit.com/r/pics/top/.json"  />
      </div>  
    );	
  }
});