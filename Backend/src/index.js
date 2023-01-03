const express=require("express");
require("./database/dbconnection");
const cors=require ("cors");
const app=express();
app.use(express.json());
const User = require("./models/user")
app.use (cors());
const port=process.env.PORT || 8081

app.post("/users", (req, res) => {
    const user = new User(req.body);
  
    user
      .save()
      .then(() => {
        res.send(user);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });
  
  app.get("/users", (req, res) => {
    User.find({})
      .then((users) => {
        res.json(users);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });



app.listen(port, ()=>{
    console.log("server is running on port"+port)
})

