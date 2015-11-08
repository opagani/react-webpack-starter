import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      address: '1 Ferry Building',
      photo: ''
    };
  },
  
  componentDidMount() {
    $.get(this.props.source, (result) => {
      this.setState({
        photo: result.data.children[1].data.preview.images[0].source.url
      });
    });
  },

  render() {
    return (
      <div>
        <p>{this.state.address}</p>
        <img src={this.state.photo} />
      </div>
    );   
  }
});