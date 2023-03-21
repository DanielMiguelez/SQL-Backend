const express = require("express")
const router = express.Router();
const UserController = require('../controllers/UserController');
const { authentication } = require("../middlewares/authentication");

router.post("/createUser", UserController.createUser )
//router.get('/confirm/:email',UserController.confirm)
router.delete("/logout",authentication, UserController.logout )
router.post("/login", UserController.login )
router.get("/getUsers", UserController.getUsers )
router.get("/getUsersById/:id", UserController.getUsersById )
router.get("/getUserByName/:name", UserController.getUserByName )
router.delete("/deleteUser/:id", UserController.deleteUser )
router.put("/updateUser/:id", UserController.updateUser )

module.exports = router;