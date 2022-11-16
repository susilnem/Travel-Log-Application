import logModel from "../models/logModel.js";
import urlConstant from "../constants/urlConstant.js";
import textConstant from "../constants/textConstant.js";

export default class LogController {
  //insert travel log in database
  async addLog(req, res, imagename) {
    try {
      const data = await logModel.create({ ...req.body, image: imagename });
      if (data) {
        res.json(data);
      } else res.json({ success: false, message: "Error during adding" });
    } catch (err) {
      return res.json({
        success: false,
        message: "Error while Quering in Database",
      });
    }
  }

  // get log list
  async getlogList(req, res) {
    let { limit } = req.query;
    if (!limit) limit = 10;
    try {
      const data = await logModel.find({
        limit: parseInt(limit),
        raw: true,
      });
      for (let d of data) {
        if (d.image) {
          d.image = urlConstant.IMG_PATH_URL + d.image;
        }
      }
      data ? res.json(data) : res.json([]);
    } catch (err) {
      res.json({ success: false, message: err });
    }
  }

  //get log by id
  async getlogByID(req, res) {
    const { id } = req.params;
    if (id) {
      const data = await logModel.findById(id);
      if (data) {
        res.json(data);
      } else res.json({ success: false, message: "No data found" });
    } else {
      res.json({ success: false, message: textConstant.LOG_ID_NOT_PROVIDED });
    }
  }

  //update the log
  async updateLog(req, res) {
    const { id } = req.params;
    // console.log(id);
    if (id) {
      const data = await logModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (data) {
        res.json({ success: true, message: "Successfully updated" });
      } else {
        res.json({ success: false, message: "Couldn't update log" });
      }
    } else
      res.json({ success: false, message: textConstant.LOG_ID_NOT_PROVIDED });
  }

  // delete the log
  async deleteLog(req, res) {
    const { id } = req.params;
    if (id) {
      const data = await logModel.findByIdAndDelete({ _id: id });
      if (data) {
        res.json({ success: true, message: "Successfully Deleted" });
      } else {
        res.json({ success: false, message: "Couldn't Delete the log" });
      }
    } else
      res.json({ success: false, message: textConstant.LOG_ID_NOT_PROVIDED });
  }
}
