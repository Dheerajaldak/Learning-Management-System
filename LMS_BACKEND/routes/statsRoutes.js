import { Router } from "express";
import { getUserCount } from "../controllers/statsController.js";
const router = Router();

router.route("/admin/stats/users").get(getUserCount); // Ensure the route matches the frontend request

export default router;
