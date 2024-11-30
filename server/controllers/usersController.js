// const Messages = require("../model/messageModel");

// module.exports.getMessages = async (req, res, next) => {
//   try {
//     const { from, to } = req.body;

//     const messages = await Messages.find({
//       users: {
//         $all: [from, to],
//       },
//     }).sort({ updatedAt: 1 });

//     const projectedMessages = messages.map((msg) => {
//       return {
//         fromSelf: msg.sender.toString() === from,
//         message: msg.message.text,
//       };
//     });
//     res.json(projectedMessages);
//   } catch (ex) {
//     next(ex);
//   }
// };

// module.exports.addMessage = async (req, res, next) => {
//   try {
//     const { from, to, message } = req.body;
//     const data = await Messages.create({
//       message: { text: message },
//       users: [from, to],
//       sender: from,
//     });

//     if (data) return res.json({ msg: "Message added successfully." });
//     else return res.json({ msg: "Failed to add message to the database" });
//   } catch (ex) {
//     next(ex);
//   }
// };


exports.login = (req, res) => {
  console.log("Login function executed");
  res.send("Login successful");
};

exports.register = (req, res) => {
  console.log("Register function executed");
  res.send("Registration successful");
};

exports.getAllUsers = (req, res) => {
  console.log("Get all users function executed");
  res.send("All users data");
};

exports.setAvatar = (req, res) => {
  const userId = req.params.id;
  console.log(`Setting avatar for user with ID: ${userId}`);
  res.send(`Avatar set for user with ID: ${userId}`);
};

exports.logOut = (req, res) => {
  const userId = req.params.id;
  console.log(`User with ID ${userId} logged out`);
  res.send(`User with ID ${userId} logged out`);
};

