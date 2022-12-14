import express from "express";
import multer from "multer";
import LogController from "../controllers/logController.js";

const router = express.Router();

let imagename;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
    imagename =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      "-" +
      file.originalname;
    cb(null, imagename);
  },
});
const upload = multer({ storage });

const logController = new LogController();

// for inserting travel log
router.post("/add", upload.single("image"), async (req, res) => {
  logController.addLog(req, res, imagename);
});

//for log list
router.get("/", logController.getlogList);
//get log detail
router.get("/:id", logController.getlogByID);
//update the log
router.put("/update/:id", logController.updateLog);
//delete the log
router.delete("/delete/:id", logController.deleteLog);

export default router;
