import logModel from "../models/logModel.js";

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
  async getloglist(req, res) {
    let { limit } = req.query;
    if (!limit) limit = 10;
    try {
      const data = await logModel.find({
        limit: parseInt(limit),
        raw: true,
      });
      for (let d of data) {
        d.image = urlConstant.IMG_PATH_URL + d.image;
      }
      data ? res.json(data) : res.json([]);
    } catch (err) {
      res.json({ success: false, message: err });
    }
  }
}
