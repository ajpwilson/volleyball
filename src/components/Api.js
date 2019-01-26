import React, { Component } from 'react';
import axios from 'axios';

class Api extends Component {
  state = { items: [] };
      
  componentDidMount() {
    axios.get('https://api.flickr.com/services/feeds/photos_public.gne?format=json').then(res => {
      console.log(res);
      this.setState({ items: res.data });
    })
  }

  render() {
    return (
      <ul>
        {this.state.items.map(item => <li key={item.id}>{item.title}</li>)}
      </ul>
    )
  }
}

export default Api;