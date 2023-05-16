import PostModel from "../Models/postModel.js";

import mongoose from "mongoose";
import UserModel from "../Models/userModel.js";

//create new post

export const createPost = async (req, res) => {
  const newPost = await new PostModel(req.body);
  try {
    await newPost.save();
    res.status(200).json("Post Created");
  } catch (error) {
    res.status(500).json(error);
  }
};

//get a post

export const getPost = async (req, res) => {
  const id = req.params.id;
  const post = await PostModel.findById(id);
  res.status(200).json(post);
  try {
  } catch (error) {
    res.status(500).json(error);
  }
};

//update a post

export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(postId);
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post Updated");
    } else {
      res.status(403).json("Actiion Forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//delete a post

export const deletePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(id);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json("post deleted successfully");
    } else {
      res.status(403).json("Action Forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
//like and dislike post

export const likePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    const post = PostModel.findById(id);
    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post Liked");
    } else {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Post Unliked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//get Timeline post

export const getTimelinePost = async (req, res) => {
  const userId = req.params.id;
  try {
    const currentUserPost = await PostModel.find({ userId: userId });
    const followingPost = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);
    res.status(200).json(
      currentUserPost
        .concat(...followingPost[0].followingPosts)
        .sort((a, b) => {
          return b.createdAt - a.createdAt;
        })
    );
  } catch (error) {
    res.status(500).json(error);
  }
};
