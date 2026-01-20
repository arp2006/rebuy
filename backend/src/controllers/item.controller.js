import * as itemService from "../services/item.service.js";

export async function categories(req, res) {
  try {
    const result = await itemService.categories();
    res.json(result);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function listings(req, res) {
  try {
    const uid = req.user?.sub ?? null;
    const result = await itemService.listings(req.body, uid);
    res.json(result);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getItem(req, res) {
  try {
    const result = await itemService.getItem(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}

export async function deleteItem(req, res) {
  try {
    await itemService.deleteItem(req.params.id, req.user.sub);
    res.json({ message: "Item deleted and archived successfully" });
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}