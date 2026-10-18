const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();

//1. GET Method :
app.get("/users", (req, res) => {
  res.send(`<ul>
            ${users.map((user) => `<li> ${user.first_name}</li>`).join("")}
        </ul>`);
});
app.get("/api/users", (req, res) => {
  return res.json(users);
});
//dynamic path parameters :
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

//2. POST Method :
app.post("/api/users", (req, res) => {
  return res.json({ status: "pending" });
});

//3. PATCH Method :
app.patch("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});

//4. DELETE Method :
app.delete("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});

// >>> we can also write using routes ::
// app
//   .route("/api/users/:id")
//   .get((req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
//   })
//   .patch((req, res) => {
//     return res.json({ status: "pending" });
//   })
//   .delete((req, res) => {
//     return res.json({ status: "pending" });
//   });

const port = 2000;
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
