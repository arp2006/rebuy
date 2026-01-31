import { Router } from "express";
import * as chatController from "../controllers/chat.controller.js";
import requireAuth from "../middleware/requireAuth.js";

const router = Router();

router.get("/chats/:type", requireAuth, chatController.getChats);
router.get("/messages/:conversationId", requireAuth, chatController.getMessages);

export default router;
