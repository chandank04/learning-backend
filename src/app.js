import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(express.json({limit: "16kb"}))  // used to access the data that comes in JSON from
app.use(express.urlencoded())   //used to access the data that comes in the URL form
app.use(express.static("public"))     //used for accessing the static files stored locally on the server
app.use(cookieParser())  // used to access the cookie stored in the user's browser


//routes import
import userRouter from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/users", userRouter)


export default app
// export { app }