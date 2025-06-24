import { User } from "@/models/user";
import { asyncError, errorHandler } from "../../../middlewares/error";
import { connectDB } from "@/utils/features";

const handler = asyncError(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
        return errorHandler(res, 400, "Enter all credentials");

    await connectDB()

    const user = await User.findOne({ email })

    if (user) return errorHandler(res, 400, "User already exist")

    const data = await User.create({ name, email, password })

    res.status(200).send({ sucess: true, data })
});

export default handler;
