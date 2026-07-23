import express from "express";
import cors from "cors"
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

import classRoutes from "./routes/classRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import errorHandler from "./middleware/errorHandler.js"
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/classes", classRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);

app.use("/api/auth", authRoutes);

console.log("--------------------------------------------------------------");
console.log(`Environment ${process.env.ENVIRONMENT}`); 
console.log("--------------------------------------------------------------");

// Middleware
app.use(cors());
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);
// Error handler (must be last)
app.use(errorHandler);

// Test API
app.get("/", (req, res) => {
    res.send("School API is running...");
});

app.get("/swagger.json", (req,res)=>{
    res.json(swaggerSpec);
});

export default app;