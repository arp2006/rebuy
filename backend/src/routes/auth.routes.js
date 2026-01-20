import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
import requireAuth from "../middleware/requireAuth.js";

const router = Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.patch("/changepassword", requireAuth, authController.changePassword);

export default router;