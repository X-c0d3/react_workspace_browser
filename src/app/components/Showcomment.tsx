import * as React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import EditComponent from './EditComponent';
class ShowComment extends React.Component {
  render() {
    return (<div>
      <h1>Show all comment</h1>
      {
        this.props.comments.map((comment: any) => (
          <div key={comment.id}>
            {comment.editing ? <EditComponent comment={comment} key={comment.id} /> : <Comment key={comment.id} comment={comment} />}
          </div>))
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