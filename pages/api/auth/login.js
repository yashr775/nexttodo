import { User } from "@/models/user";
import { asyncError, errorHandler } from "../../../middlewares/error";
import { connectDB, cookieSetter, generateToken } from "@/utils/features";
import bcrypt from "bcrypt";

const handler = asyncError(async (req, res) => {
    if (req.method !== "POST") {
        return errorHandler(res, 400, "Only post request allowed");
    }
    const { email, password } = req.body;

    if (!email || !password)
        return errorHandler(res, 400, "Enter all credentials");

    await connectDB();

    const user = await User.findOne({ email }).select("+password");

    if (!user) return errorHandler(res, 400, "User not found");

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
        return errorHandler(res, 400, "Invalid credentials");

    const token = generateToken(user._id);
    cookieSetter(res, token, true);

    res.status(200).send({ sucess: true, message: `Welcome back ${user.name}` });
});

export default handler;
