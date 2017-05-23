import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostBody from './PostBody';
import { fetchComments } from '../actions/commentActions';

class Home extends Component {

  componentWillMount(){
     this.props.fetchComments();
   }

  render(){
    let postlist = this.props.posts.map((post, i) =>
      <PostBody postId={post.id} key={i}>
        {post.title} //用处？
      </PostBody>
    )



    return(
      <div  className='home'>
        {postlist}
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    posts: state.posts
  }
)

Home.propTypes = {
   fetchComments: React.PropTypes.func.isRequired
 }

// export default App;
// export default connect(mapStateToProps)(Home);
export default connect(mapStateToProps, { fetchComments } )(Home);
