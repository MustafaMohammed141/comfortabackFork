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
const getSingleUsers = async () => {
  console.log(`getUsers`);
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
