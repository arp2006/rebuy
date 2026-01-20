import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import requireAuth from "../middleware/requireAuth.js";

const router = Router();

router.get("/me", userController.me);
router.get("/info", requireAuth, userController.info);
router.get("/details", requireAuth, userController.details);
router.patch("/changedetails", requireAuth, userController.changeDetails);

router.get("/users/:id", userController.publicProfile);
router.get("/users/:id/listings", userController.userListings);

export default router;
