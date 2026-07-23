import dotenv from "dotenv";

const env = process.env.NODE_ENV || "dev";

dotenv.config({
    path: `.env.${env}`
});

const { default: app } = await import("./app.js");
const { connectDB } = await import("./config/database.js");

const PORT = process.env.PORT || 3000;

await connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});