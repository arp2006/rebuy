import * as chatService from "../services/chat.service.js";

export async function getChats(req, res) {
  try {
    const userId = req.user.sub;
    const { type } = req.params;
    if (!["buying", "selling"].includes(type)) {
      return res.status(400).json({ error: "Invalid chat type" });
    }
    const result = await chatService.getChats(userId, type);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getMessages(req, res) {
  try {
    const userId = req.user.sub;
    const { convId } = req.params;
    const messages = await chatService.getMessages(convId, userId);
    res.json(messages);
  } catch (err) {
    console.error(err);
    if (err.message === "FORBIDDEN") {
      return res.status(403).json({ error: "Not authorized" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
}
