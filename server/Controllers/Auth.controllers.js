import bcryptjs from "bcryptjs";
import ToDousers from "../Model/User.model.js";

export const Signup = async (req, res, next) => {
  const {todoUser, todoemail, todoPassword } = req.body;
  // const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new ToDousers({
    todoUser,
    todoemail,
    todoPassword,
  });
  try {
    await newUser.save();
    res.status(201).json("user Created Successfully");
  } catch (error) {
    next(error);
  }
};
