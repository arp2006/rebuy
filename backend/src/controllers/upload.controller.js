import cloudinary from "../config/cloudinary.js";
import fs from "fs";

export async function uploadImages(req, res) {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files received" });
    }

    const uploadedUrls = [];

    for (const file of req.files) {
      const result = await cloudinary.v2.uploader.upload(file.path, {
        folder: "marketplace_items",
      });

      uploadedUrls.push(result.secure_url);
      fs.unlinkSync(file.path);
    }

    res.json({ imageUrls: uploadedUrls });
  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    res.status(500).json({ error: "Image upload failed" });
  }
}
