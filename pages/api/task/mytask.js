import { checkAuth, connectDB } from "@/utils/features";
import { asyncError, errorHandler } from "../../../middlewares/error";
import { Task } from "@/models/task";


const handler = asyncError(async (req, res) => {
    if (req.method !== "GET")
        return errorHandler(res, 400, "Only GET Method is allowed");
    await connectDB();

    const user = await checkAuth(req);

    if (!user) return errorHandler(res, 401, "Login First");

    const tasks = await Task.find({ user: user._id });
    console.log("tasks " + tasks)
    res.json({
        success: true,
        tasks,
    });
});

export default handler;