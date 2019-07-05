import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CreateComment = ({ postId, addComment }) => {
  const [text, setText] = useState('');
  return (
    <div className='post-form'>
      <div className='post-form-header bg-primary p'>
        <h3>Leave a comment</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      >
        <textarea
          name='text'
          value={text}
          cols='30'
          rows='5'
          placeholder='Add your comment...'
          onChange={e => setText(e.target.value)}
          required
        />
        <input className='btn btn-dark my-1' type='submit' value='Submit' />
      </form>
    </div>
  );
};

CreateComment.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CreateComment);
