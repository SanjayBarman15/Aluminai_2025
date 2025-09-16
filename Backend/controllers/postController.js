const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author').populate('comments.user');
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
};

exports.createPost = async (req, res) => {
    try {
        const { author, content } = req.body;
        if (!author || !content) {
            return res.status(400).json({ message: 'All fields are required.' });
        }
        const post = new Post({ author, content });
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
};

exports.addComment = async (req, res) => {
    try {
        const { user, text } = req.body;
        const postId = req.params.postId;
        const post = await Post.findById(postId);
        if (!post) return res.status(404).json({ message: 'Post not found.' });
        post.comments.push({ user, text });
        await post.save();
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
};
