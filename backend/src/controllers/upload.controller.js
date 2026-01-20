import cloudinary from "cloudinary";
import fs from "fs";

export async function uploadImages(req, res) {
  try {
    const uploadedUrls = [];

    for (const file of req.files) {
      const result = await cloudinary.v2.uploader.upload(file.path, {
        folder: "marketplace_items",
        use_filename: true,
      });

      uploadedUrls.push(result.secure_url);
      fs.unlinkSync(file.path);
    }

    res.json({ imageUrls: uploadedUrls });
  } catch (err) {
    res.status(500).json({ error: "Image upload failed" });
  }
}
