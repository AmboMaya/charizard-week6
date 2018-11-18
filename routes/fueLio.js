const express = require('express')
const router = express.Router()
const db = require('../database')

router.get('/', (req, res) => {
  db.displayPrices().then()
})

router.get("/", (req, res) => {
  db.getPosts().then(posts => {
    const arrayed = posts.map(post => {
      const newPost = { ...post };
      // convert the saved JSON string into a JavaScript array
      newPost.paragraphs = JSON.parse(post.paragraphs);
      return newPost;
    });
    res.json(arrayed);
  });
});

module.exports = router