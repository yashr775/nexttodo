import { serialize } from "cookie";
import mongoose from "mongoose";

export const connectDB = async () => {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
        dbName: "NextTodo",
    });
    console.log(`Connected to mongoDB on host ${connection.host}`);
};

export const cookieSetter = (res, token, set) => {
    res.setHeader(
        "Set-Cookie",
        serialize("token", token, {
            path: "/",
            httpOnly: true,
            maAge: set ? 1000 * 60 * 60 * 24 * 15 : 0,
        })
    );

    res.status(201).json({ sucess: true, message: "User created successfully" });
};
