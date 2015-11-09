import React, { PropTypes, Component } from 'react';

export default class DataModel extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired
  }
  
  state = {
    address: '1 Ferry Building',
    photo: ''
  }

  componentDidMount() {
    $.get(this.props.source, (result) => {
      this.setState({
        //address: result.data[0].listing.location.streetAddress
        photo: result.data.children[1].data.preview.images[0].source.url
      });
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.address}</p>
        <img src={this.state.photo} />
      </div>
    );   
  }
}