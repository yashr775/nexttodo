import { checkAuth, connectDB } from "@/utils/features";
import { errorHandler } from "../../../middlewares/error";
import { Task } from "@/models/task";

const handler = async (req, res) => {
    if (req.method !== "POST") {
        return errorHandler(res, 400, "Only post request allowed");
    }

    const { title, description } = req.body;
    if (!title || !description)
        return errorHandler(res, 400, "Enter all credentials");

    const user = await checkAuth(req);



    if (!user) return errorHandler(res, 400, "User does not exist");

    await connectDB();
    await Task.create({
        title,
        description,
        user: user._id,
    });

    res.json({ success: true, message: "Task created" });
};

export default handler;
