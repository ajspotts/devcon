import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../../actions/post';

const CreatePost = ({ createPost }) => {
  const [text, setText] = useState('');

  return (
    <Fragment>
      <div className='post-form'>
        <div className='post-form-header bg-primary p'>
          <h3>What would you like to say today?</h3>
        </div>
        <form
          className='form my-1'
          onSubmit={e => {
            e.preventDefault();
            createPost({ text });
            setText('');
          }}
        >
          <textarea
            name='text'
            value={text}
            cols='30'
            rows='5'
            placeholder='Create your post'
            onChange={e => setText(e.target.value)}
            required
          />
          <input className='btn btn-dark my-1' type='submit' value='Submit' />
        </form>
      </div>
    </Fragment>
  );
};

CreatePost.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(CreatePost);
