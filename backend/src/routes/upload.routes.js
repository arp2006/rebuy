import { Router } from "express";
import multer from "multer";
import * as uploadController from "../controllers/upload.controller.js";
import requireAuth from "../middleware/requireAuth.js";

const router = Router();
const upload = multer({ dest: "temp/" });

router.post( "/upload-images", requireAuth, upload.array("images", 5), uploadController.uploadImages );

export default router;
