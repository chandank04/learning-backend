import dotenv from 'dotenv'
dotenv.config()

// console.log("🔍 ENV TEST:", process.env.CLOUDINARY_CLOUD_NAME); 

import connectDB from './db/index.js'
import app from './app.js'





connectDB()
.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("Database connection failed !!! ", error);
})