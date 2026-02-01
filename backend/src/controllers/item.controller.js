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
    const summary = req.query.summary === "true";
    const item = await itemService.getItem(
      Number(req.params.id),
      summary
    );
    res.json(item);
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

export async function search(req, res) {
  try {
    const uid = req.user?.sub ?? null;
    const result = await itemService.search(req.body, uid);
    res.json(result)
  }
  catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function accountListings(req, res) {
  try {
    const uid = req.user.sub;
    const result = await itemService.accountListings(uid);
    res.json(result);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function archive(req, res) {
  try {
    const uid = req.user.sub;
    const result = await itemService.archive(uid);
    res.json(result);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function showArchive(req, res) {
  try {
    const uid = req.params.id;
    const id = req.user.sub;
    const result = await itemService.showArchive(uid, id);
    res.json(result);
  } 
  catch (err) {
    res.status(err.status || 500).json({ error: err.message || "Internal server error" });
  }
}

export async function editItem(req, res) {
  try {
    const item = await itemService.editItem(req.params.id, req.user.sub);
    res.json(item);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}

export async function updateItem(req, res) {
  try {
    await itemService.updateItem(
      req.params.id,
      req.user.sub,
      req.body
    );
    res.json({ message: "Post updated successfully" });
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}

export async function createItem(req, res) {
  try {
    const uid = req.user.sub;
    await itemService.createItem(uid, req.body);
    res.status(201).json({ message: "Listing created successfully" });
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}