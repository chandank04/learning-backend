import dotenv from 'dotenv'
dotenv.config()

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// console.log("cloudinary.js loaded with:", process.env.CLOUDINARY_CLOUD_NAME);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});




const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    //now file has been uplaoded successfully
    // console.log("File has been uplaoded ", response.url);
    fs.unlinkSync(localFilePath)
    return response;
  } catch (error) {
    console.log("cloudinary error ", error);

    fs.unlinkSync(localFilePath); //remove the local file from the server as file upload has been failed
    return null;
  }
};

export { uploadOnCloudinary };
