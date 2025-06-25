import { User } from "@/models/user";
import { asyncError, errorHandler } from "../../../middlewares/error";
import { connectDB, cookieSetter, generateToken } from "@/utils/features";
import bcrypt from "bcrypt";

const handler = asyncError(async (req, res) => {
    if (req.method !== "POST") {
        return errorHandler(res, 400, "Only post request allowed");
    }
    const { name, email, password } = req.body;

    if (!name || !email || !password)
        return errorHandler(res, 400, "Enter all credentials");

    await connectDB();

    const user = await User.findOne({ email });

    if (user) return errorHandler(res, 400, "User already exist");

    const hashedPassword = await bcrypt.hash(password, 10);

    const data = await User.create({ name, email, password: hashedPassword });
    const token = generateToken(data._id);
    cookieSetter(res, token, true);

    res.status(200).send({ success: true, message: "Registered successfully", user });
});

export default handler;
