import * as authService from "../services/auth.service.js";

export async function login(req, res) {
  try {
    const result = await authService.login(req.body);
    res.json(result);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}

export async function register(req, res) {
  try {
    const result = await authService.register(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}

export async function changePassword(req, res) {
  try {
    await authService.changePassword(req.user.sub, req.body);
    res.json({ message: "Password updated successfully." });
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}