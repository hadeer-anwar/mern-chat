import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import errorHandler from './middlewares/errorHandler.js'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.route.js'

const app = express();

// Enable CORS
app.use(cors());
app.options('*', cors());

// Middleware for JSON parsing
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(cookieParser());




// Define routes
app.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});

app.use('/api',userRouter);


// Error handling
app.use(errorHandler);

// 404 handling
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "This resource is not available"
  });
});

export default app;