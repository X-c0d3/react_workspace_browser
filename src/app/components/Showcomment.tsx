import * as React from 'react';
import { connect } from 'react-redux';
import Comment from './comment';
class ShowComment extends React.Component {
  render() {
    return (<div>
      <h1>Show all comment</h1>
 {
   this.props.comments.map((comment) => <Comment key={comment.id} comment={comment} /> )
 }
    </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    comments: state
  }
}

export default connect(mapStateToProps)(ShowComment);