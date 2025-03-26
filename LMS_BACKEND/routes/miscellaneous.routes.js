// import { Router } from "express";
// import { contactUs } from "../controllers/miscellaneous.controller.js";
// // import { authorizedRoles, isLoggedIn } from "../middlewares/auth.middleware.js";

// const router = Router();

// router.route("/contact").post(contactUs);
// // router.route('/admin/status/users')
// // .get(isLoggedIn, authorizedRoles('ADMIN'), userStatus);

// export default router

import { Router } from "express";
import { contactUs } from "../controllers/miscellaneous.controller.js"; // Ensure this is the correct import path

const router = Router();

router.route("/miscellaneous/contact").post(contactUs); // Ensure the route matches the frontend request

export default router;
