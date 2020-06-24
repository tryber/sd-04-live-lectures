import React from 'react';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      commentList: [],
    };
    this.updateComment = this.updateComment.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  updateComment(e) {
    this.setState({
      comment: e.target.value,
    });
  }

  addComment() {
    this.setState(({ comment, commentList }) => ({
      commentList: [...commentList, comment],
      comment: '',
    }));
  }
  render() {
    const { comment, commentList } = this.state;
    return (
      <div>
        <h1>Comente!</h1>
        <input data-testid="input-comment" value={comment} onChange={this.updateComment} />
        <button type="submit" data-testid="button-comment" onClick={this.addComment}> Add Comment! </button>
        <ul>
          {commentList.map((c, index) => <li key={`${c}${index}`}>{c}</li>)}
        </ul>
      </div>
    );
  }
}

export default Comments;