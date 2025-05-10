const { jwtDecode } = require("jwt-decode");

const checkAuth = async (req, res, next) => {
  const token =
    req.headers?.authorization?.split(" ")[1] ||
    req.headers?.Authorization?.split(" ")[1];
  if (!token)
    return res.status(401).json({
      status: 401,
      data: {
        data: null,
        message: "unauthorized access",
      },
    });
  return next();
};
module.exports = { checkAuth };
