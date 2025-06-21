export const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "NetTodo" });
};
