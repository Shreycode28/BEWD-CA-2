const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let signup_page = [];

app.get("/users", (req, res) => {
  res.json(signup_page);
});

app.post("/signup", (req, res) => {
  const { username, email, password, data_of_birth } = req.body;

  try {
    if (!username) {
      return res.json({ message: "Username  cannot be empty" });
    } else if (!email) {
      return res.json({ message: "Email cannot be empty" });
    } else if (password.length < 8 || password.length > 16) {
      return res.json({
        message:
          "Password length should be greater than 8 or less than or equal to 16",
      });
    }

    const new_user = {
      username,
      email,
      password,
      data_of_birth,
    };

    signup_page.push(new_user);

    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
