const router = require("express").Router(); // import express router
let User = require("../models/user.model"); // import user model

// get users using get request and return json object
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error : " + err));
});

// add new users using post request and return json object
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const address = req.body.address;
  const postalCode = req.body.postalCode;
  const mobile = req.body.mobile;

  const newUser = new User({ username, email, address, postalCode, mobile });

  newUser
    .save()
    .then(() => res.json("*** Added new user"))
    .catch((err) => res.status(400).json("Error : " + err));
});

// get user using id
router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error : " + err));
});

// delete user using id
router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("*** User deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// update user using id
router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.username = req.body.username;
      user.email = req.body.email;
      user.address = req.body.address;
      user.postalCode = req.body.postalCode;
      user.mobile = req.body.mobile;

      user
        .save()
        .then(() => res.json("*** User updated"))
        .catch((err) => res.status(400).json("Error : " + err));
    })
    .catch((err) => res.status(400).json("Error : " + err));
});

module.exports = router;
