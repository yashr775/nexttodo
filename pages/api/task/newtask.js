import { connectDB } from "@/utils/features";
import { errorHandler } from "../../../middlewares/error";
import { Task } from "@/models/task";


const handler = async (req, res) => {
    if (req.method !== "POST") {
        return errorHandler(res, 400, "Only post request allowed")
    }

    const { title, description } = req.body;
    await connectDB();
    await Task.create({
        title,
        description,
        user: "664b2571c9b0b9e8a9435461",
    });

    res.json({ success: true, message: "Task created" });

};

export default handler;
