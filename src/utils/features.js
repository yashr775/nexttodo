import { serialize } from "cookie";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import cookie from "cookie";
import { User } from "@/models/user";

export const connectDB = async () => {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
        dbName: "NextTodo",
    });
    console.log(`Connected to mongoDB on host ${connection.host}`);
};

export const cookieSetter = (res, token, set) => {
    res.setHeader(
        "Set-Cookie",
        serialize("token", set ? token : "", {
            path: "/",
            httpOnly: true,
            maxAge: set ? 1000 * 60 * 60 * 24 * 15 : 0,
        })
    );
};


export const generateToken = (_id) => {

    return jwt.sign({ _id }, process.env.JWT_SECRET)

}




export const checkAuth = async (req) => {
    const cookies = cookie.parse(req.headers.cookie || "");
    const cookie1 = cookies.token;

    if (!cookie) return null;

    const decoded = jwt.verify(cookie1, process.env.JWT_SECRET);

    return await User.findById(decoded._id);
};