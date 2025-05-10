

const  User =require("../models/userschema");
  const getUsers = async (req, res) => {

  /*  res.status(200).json({
      status: 200,
      data: { data: users, message: "Users fetched successfully" },
    });*/
    try {
      const users = await User.find({});
      res.status(200).json({
        status: 200,
        data: { data: users, message: "Users fetched successfully" },
      });
    } catch (err) {
      res.status(500).json({ status: 500, message: "Server error" });
    }
  };
  
  const addUsers = async (req, res) => {
    console.log("add users");
    res.status(201).json({ message: "User added (dummy response)" });
  };
  
  const deleteUsers = async (req, res) => {
    console.log("delete users");
    res.status(200).json({ message: "User deleted (dummy response)" });
  };
  
const getSingleUsers = async (req, res) => {
  const { userId } = req.params;

  try {
    const singleUser = await User.findById(userId);

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
  } catch (err) {
    res.status(500).json({ status: 500, message: "Server error" });
  }

};

const addUsers = async (req, res) => {
  console.log("add users");
  res.status(201).json({ message: "User added (dummy response)" });
};

const deleteUsers = async (req, res) => {
  console.log("delete users");
  res.status(200).json({ message: "User deleted (dummy response)" });
};
const putUsers = async (req, res) => {
  console.log("put Users");
  res.status(200).json({ message: "User deleted (dummy response)" });
};

const getSingleUsers = async (req, res) => {
  const { userId } = req.params;

  try {
    const singleUser = await User.findById(userId);

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
  } catch (err) {
    return res.status(500).json({
      status: 500,
      data: { data: null, message: "Server error" },
    });
  }
};

module.exports = {
  getUsers,
  addUsers,
  putUsers,
  deleteUsers,
  getSingleUsers,
};
