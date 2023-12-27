const User = require("../Models/userModel");

async function handleGetAllUsers(req, res) {
  console.log("loading....");
  const result = await User.find({});
  console.log(result);
  return res.status(200).json({ msg: "success", result: result });
}

async function handleGetUsersById(req, res) {
  const { id } = req.params;
  const user = await User.findById(id);
  return res
    .status(200)
    .json({ msg: "user id data successfully get", result: user });
}

async function handleUpdateUserById(req, res) {
  const id = req.params.id;
  const result = await User.findByIdAndUpdate(id, { firstName: "Hammadiii" });
  return res.status(200).json({ status: "updated user", result: result });
}

async function handleDeleteUserById(req, res) {
  const id = req.params.id;
  const result = await User.findByIdAndDelete(id);
  return res.json({ status: "pending", result: result });
}

async function handleCreateUser(req, res) {
  const { body } = req;
  const { first_name, last_name, email, gender, job_title } = body;

  const userData = {
    firstName: first_name,
    lastName: last_name,
    email: email,
    gender: gender,
    jobTitle: job_title,
  };

  if (!first_name || !last_name || !email || !gender || !job_title) {
    return res.status(401).json({ msg: "All fields are req..." });
  } else {
    const result = await User.create(userData);
    await result.save();
    console.log(result);
    return res.status(201).json({ result: result, msg: "success" });
  }
}

module.exports = {
  handleGetAllUsers,
  handleGetUsersById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
};
