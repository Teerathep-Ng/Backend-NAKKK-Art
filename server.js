// step 1
import express from "express";
import cors from "cors";
import "dotenv/config";

// step 2
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App config
const app = express();
const port = process.env.PORT || 4000;

// service connections
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => 
    console.log("Server started on PORT : " + port + "🌏🌃")
)

// const allowedOrigins = [
//   "https://artnakkk-frontend-admin.vercel.app/",
//   "https://addmin-nakkkart-373g2ivhm-sudawan-s-projects.vercel.app/",
//   "http://localhost:5175/", // For local development
//   "http://localhost:5176/", // For local development
// ];

// // Configure CORS
// app.use(
//   cors({
//     origin: (origin, callback) => {
//       // Allow requests with no origin (e.g., mobile apps or curl)
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.includes(origin)) {
//         callback(null, true); // Allow the origin
//       } else {
//         callback(new Error("Not allowed by CORS")); // Block the origin
//       }
//     },
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true, // Allow cookies or Authorization headers
//   })
// );