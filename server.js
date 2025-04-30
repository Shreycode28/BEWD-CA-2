const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let signup_page = [];

app.get("/users", (req, res) => {
  res.json(signup_page);
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email) {
      return res.json({ message: "Email cannot be empty" });
    } 
    else if (!password) {
      return res.json({
        message:
          "Password cannot be empty",
      });
    }

    const new_user = {
      email,
      password,
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
