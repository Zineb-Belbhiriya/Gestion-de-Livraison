const express = require("express");
const router = express.Router();

// THIS AREA IS USED TO CALL THE METHODS THAT ARE DEFINED IN THE CONTROLLER
// STATIC WAY
// const { getContents } = require("../controller/default-controller");
// const { createNewContent } = require("../controller/default-controller");
// CLEAN WAY
const {
  createNewContent,
  getContents,
  getSingleContentDetails,
  updateOneSingleContent,
  eraseOneSingleContent,
} = require("../controller/default-controller");

// THIS AREA IS USED TO CUSTOMIZE THE URI FOR EACH OPERATION
router.route("/contents").get(getContents);

router.route("/content/:id").get(getSingleContentDetails);

router.route("/admin/content/new-content").post(createNewContent);

// either this ecriture or the buttom one
  // router.route("/admin/content/:id").put(updateOneSingleContent);
  // router.route("/admin/content/:id").delete(eraseOneSingleContent);

router.route("/admin/content/:id").put(updateOneSingleContent).delete(eraseOneSingleContent);

module.exports = router;
