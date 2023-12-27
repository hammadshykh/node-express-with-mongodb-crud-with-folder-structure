const express = require("express");
const User = require("../Models/userModel");
const {
  handleGetAllUsers,
  handleGetUsersById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
} = require("../Controllers/user");
const router = express.Router();

// REST API

// GET USER/USER/ID edit / deltete / get

// Define middleware functions
const middlewareFunction = (req, res, next) => {
  // Middleware logic here
  next(); // Call next to pass control to the next middleware in the stack
};

// Use middleware with the router
router.use("/api/users", middlewareFunction, (req, res) => {
  // Route handling logic
  res.send("Response from the route");
});

router
  .route("/:id")
  .get(handleGetUsersById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

// get api
router.get("/", handleGetAllUsers);
// post api
router.post("/", handleCreateUser);

module.exports = router;
