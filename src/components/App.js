import React, { Component } from 'react';
import { Link } from 'react-router';
// import PostBody from './PostBody';
// import CommentBox from './CommentBox';
// import {Provider} from 'react-redux';
// import store from '../store';

class App extends Component {
  render(){
    return(
      <div>
        <Link to='/'  className="back-home">HOME</Link >
        {this.props.children}
      </div>
    )
  }
}

export default App;
