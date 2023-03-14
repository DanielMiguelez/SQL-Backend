const express = require("express")
const PostController = require('../controllers/PostController');
const { authentication, isAdmin } = require("../middlewares/authentication");
const router = express.Router();

router.post("/createPost", authentication, PostController.createPost )
router.get("/getPosts", PostController.getPosts )
router.get("/getPostById/:id", PostController.getPostById )
router.get("/getOnePostByName/:title", PostController.getOnePostByName )
router.delete("/deletePost/:id",authentication, isAdmin, PostController.deletePost )
router.put("/updatePost/:id", PostController.updatePost )

module.exports = router;