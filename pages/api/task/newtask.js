import { connectDB } from "@/utils/features";
import { Task } from "@/models/task";

const handler = async (req, res) => {
    if (req.method !== "POST") {
        return res
            .status(400)
            .json({ success: false, message: "Only post request allowed" });
    }

    const { title, description } = req.body;

    await Task.create({
        title,
        description,
        user: "664b2571c9b0b9e8a9435461",
    });

    res.json({ success: true, message: "Task created" });
    await connectDB();
};

export default handler;
