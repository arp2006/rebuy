import * as userService from "../services/user.service.js";

export async function me(req, res) {
  try {
    const result = await userService.me(req.user);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function info(req, res) {
  try {
    const result = await userService.info(req.user.sub);
    res.json(result);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}

export async function publicProfile(req, res) {
  try {
    const result = await userService.publicProfile(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}

export async function userListings(req, res) {
  try {
    const result = await userService.userListings(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function details(req, res) {
  try {
    const result = await userService.details(req.user.sub);
    res.json(result);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}

export async function changeDetails(req, res) {
  try {
    await userService.changeDetails(req.user.sub, req.body);
    res.json({ message: "Profile updated successfully." });
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}