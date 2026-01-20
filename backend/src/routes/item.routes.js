import { Router } from "express";
import * as itemController from "../controllers/item.controller.js";
import requireAuth from "../middleware/requireAuth.js";

const router = Router();

router.get("/categories", itemController.categories);

router.post("/listings", itemController.listings);
// router.post("/search", itemController.search);

// router.post("/account-listings", requireAuth, itemController.accountListings);
// router.post("/archive", requireAuth, itemController.archive);

router.get("/items/:id", itemController.getItem);
// router.get("/items/:id/edit", requireAuth, itemController.editItem);
// router.patch("/items/:id", requireAuth, itemController.updateItem);
router.delete("/items/:id", requireAuth, itemController.deleteItem);

// router.post("/create", requireAuth, itemController.createItem);

export default router;
