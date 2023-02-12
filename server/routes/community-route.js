const { property } = require(".");

const router = require("express").Router();
const Community = require("../models").communityModel;
const Event = require("../models").eventModel;
// const propertyValidation = require("../validation").propertyValidation;

router.use((req, res, next) => {
    console.log("A request is coming into api...");
    next();
});

// Create Community
router.post("/", async (req, res) => {
    // validate the inputs before making a new course
    // const { error } = propertyValidation(req.body);
    // if (error) return res.status(400).send(error.details[0].message);
  
    let { location, description} = req.body;
  
    let newCommunity = new Community({
      host: req.user._id,
      location,
      description,
    });
  
    try {
      await newCommunity.save();
      res.status(200).send("New community has been saved.");
    } catch (err) {
      res.status(400).send("Cannot save community.");
    }
  });

module.exports = router;