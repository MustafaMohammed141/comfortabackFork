const userschema = require("../models/userschema");

const getUsers = async (req, res) => {
  try {
    const users = await userschema.find({});
    res.status(200).json({
      status: 200,
      data: { data: users, message: "Users fetched successfully" },
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Server error" });
    console.log(err);
  }

};
const getsingleUsers = async (req, res) => {
    const { userId } = req.params;
  
    const singleUser = users.find((user) => user.id == userId);
  
    if (!singleUser) {
      return res.status(404).json({
        status: 404,
        data: { data: null, message: "Invalid user ID" },
      });
    }
  
    return res.status(200).json({
      status: 200,
      data: { data: singleUser, message: "User fetched successfully" },
    });
  };
const postUsers = async () => {
  console.log(`postUsers`);
};
const deleteUsers = async () => {
  console.log(`deleteUsers`);
};
const putUsers = async () => {
  console.log(`putUsers`);
};
module.exports = { getUsers, postUsers, deleteUsers, putUsers, getSingleUsers };
