const axios = require("axios");

const bcrypt = require("bcryptjs");

exports.signup = async (req,res)=>{

  const { username, password } = req.body;

  const hashedPassword =
    await bcrypt.hash(password,10);

  await axios.post(
    "http://localhost:5000/users",
    {
      username,
      password: hashedPassword
    }
  );

  res.json({
    message:"Signup successful"
  });

};