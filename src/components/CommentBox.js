import React, { Component } from 'react';
// import store from '../store';
import { connect } from 'react-redux';
import { addComment } from '../actions/commentActions';
import { fetchComments } from '../actions/commentActions'; //引入action creator


class CommentBox extends Component {

  handleSubmit(e){
    e.preventDefault();
    // store.dispatch({type: 'ADD_COMMENT', comment: this.refs.comment.value, postId: this.props.postId});

    let data = {
      commentBody: this.refs.comment.value,
      postId: this.props.postId
    }
    this.props.addComment(data)

    this.refs.commentForm.reset();
  }

  componentWillMount(){
     this.props.fetchComments(); //调用action creator，从服务器get初始数据
   }

  render(){

    let commentList = this.props.comments[this.props.postId].map((comment, i) => {
      return (
        <div className="comment" key={i}>
          { comment }
        </div>
      )
    })


    // let commentList = JSON.stringify(this.props.comments) //拿到数据后，数据格式调整

    return(
       <div className="comment-box">
        { commentList }
       <form ref="commentForm" onSubmit={this.handleSubmit.bind(this)} className="comment-form">
          <input type="text" ref="comment" className="input"/>
          <input type="submit" className="submit-btn"/>
        </form>
        <div className="underline"></div>
      </div>
    )
  }
}

CommentBox.propTypes = {
   addComment: React.PropTypes.func.isRequired,
   fetchComments: React.PropTypes.func.isRequired, //类型检查
   comments: React.PropTypes.object.isRequired
 }

const mapStateToProps = (state) => ({
  comments: state.comments
});

// export default connect(mapStateToProps)(CommentBox);
export default connect(mapStateToProps, { addComment, fetchComments } )(CommentBox); //传入
