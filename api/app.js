import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js"
import userRoute from "./routes/user.route.js"
import chatRoute from "./routes/chat.route.js"
import messageRoute from "./routes/message.route.js"
import path from 'path';

const app=express();

app.use(cors({
    origin: true, // Allows all origins
    credentials: true // Allows cookies and authentication headers
}));
app.use(express.json());
app.use(cookieParser());

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});


app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/test",testRoute);
app.use("/api/chats",chatRoute);
app.use("/api/messages",messageRoute);
app.use("/",(req,res)=>{res.send('hi')});
const port =8800;
app.listen(port,()=>{
    console.log("Server is running");
})