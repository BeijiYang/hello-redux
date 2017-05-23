
import React, { Component } from 'react';
// import store from '../store';
import { connect } from 'react-redux';
import store from '../store';
import { Link } from 'react-router';




class PostBody extends Component {
 //  constructor(){
 //   super();
 //   this.state = {
 //    number:store.getState().length
 //   }
 // }

handleClick(e) {
  store.dispatch({type:"INCRESEMENT_LIKES", index: this.props.postId - 1 });
}

  render(){
    return(
      <div className="post-body">

        <Link to={`/posts/${this.props.postId}`} className="title">
          { this.props.posts[this.props.postId - 1].title }
        </Link>

        <div onClick={this.handleClick.bind(this)} className="likes-num num" >
            { this.props.posts[this.props.postId - 1].likes } 喜欢
        </div>
        <div className="comment-num num">
        { this.props.comments[this.props.postId].length } 评论
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments,
  posts: state.posts
});

// export default PostBody;
export default connect(mapStateToProps)(PostBody);
