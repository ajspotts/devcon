const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');
const Post = require('../../models/Post');
const User = require('../../models/User');
const Profile = require('../../models/Profile');

// @route  Post api/posts
// @desc   Create a post
// @access Private
router.post('/', [ auth, [
  check('text', 'Text is required').not().isEmpty()
]],
async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.findById(req.user.id).select('-password');

    //Build post
    const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });

    //Create post
    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error')
  }
 }
);

// @route  Get api/posts
// @desc   Get all posts
// @access Private

router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error')
  }
});

// @route  Get api/posts/:id
// @desc   Get post by ID
// @access Private

router.get('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if(!post) return res.status(404).json({ msg: 'Post not found' });
    
    res.json(post);
  } catch (err) {
    if(err.kind == 'ObjectId') return res.status(404).json({ msg: 'Profile not found' });
    console.error(err.message);
    res.status(500).send('Server Error')
  }
})

module.exports = router;