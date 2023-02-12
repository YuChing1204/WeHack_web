// const { community } = require(".");

const router = require("express").Router();
const Community = require("../models").communityModel;
const Event = require("../models").eventModel;
const User = require("../models").userModel;
// const propertyValidation = require("../validation").propertyValidation;

router.use((req, res, next) => {
    console.log("A request is coming into api...");
    next();
});

// Get all community
router.get("/", (req, res) => {
    Community.find({})
      .then((community) => {
        res.send(community);
      })
      .catch(() => {
        res.status(500).send("Error!! Cannot get community!!");
      });
});

// Create Community
router.post("/", async (req, res) => {
    // validate the inputs before making a new course
    // const { error } = propertyValidation(req.body);
    // if (error) return res.status(400).send(error.details[0].message);
  
    let { location, description} = req.body;
  
    let newCommunity = new Community({
      admin: req.user._id,
      location,
      description,
      residents: [req.user._id],
    });
  
    try {
      await newCommunity.save();
      res.status(200).send("New community has been saved.");
    } catch (err) {
      res.status(400).send("Cannot save community.");
    }
  });

//Update Community
router.put("/:id", async(req, res, next)=>{
  try{
      const updatedCommunity = await Community.findByIdAndUpdate(req.params.id, { $set: req.body}, {new:true});
      res.status(200).json(updatedCommunity);
  }catch(err){
      next(err);
      // res.status(500).json(err);
  }
});

// Join Community
router.post("/join/:_id", async (req, res) => {
  let { _id } = req.params;
  let user_id = req.user._id;

  try {
    let community = await Community.findOne({ _id });
    let updatedUser = await User.findByIdAndUpdate(user_id, {community: _id}, {new:true});
    community.residents.push(user_id);
    await community.save();
    res.send("Join completed.");
  } catch (err) {
    res.send(err);
  }
});

// Delete Community
router.delete("/:_id", async (req, res) => {
    let {_id} = req.params;
    let community = await Community.findOne({ _id });
    if (!community) {
        res.status(404);
        return res.json({
            success: false,
            message: "Property not found.",
        });
    }
    if (community.admin.equals(req.user._id)) {
        Community.deleteOne({ _id })
            .then(() => {
                res.send("Community deleted.");
            })
            .catch((e) => {
                res.send({
                    success: false,
                    message: e,
                });
            });
    } else {
        res.status(403);
        return res.json({
            success: false,
            message:
                "Only the admin of this community can delete it.",
        });
    };
});

//user move out from a community
router.patch("/:_id", async (req, res) => {
    let { _id } = req.params;
    let { user_id } = req.body;

    try {
        let community = await Community.findByIdAndUpdate( { _id });
        community.residents.pull(user_id);
        await community.save();
        res.send("successful");
    } catch (err) {
        res.send(err);
        }
    
});

// Create Event
router.post("/event", async (req, res) => {
  // validate the inputs before making a new course
  // const { error } = propertyValidation(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  let { title, location, description, date} = req.body;

  let newEvent = new Event({
    host: req.user._id,
    title,
    location,
    description,
    date
  });

  try {
    await newEvent.save();
    res.status(200).send("New event has been saved.");
  } catch (err) {
    res.status(400).send("Cannot save event.");
  }
});

//Update Event
router.put("/event/:id", async(req, res, next)=>{
    try{
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, { $set: req.body}, {new:true});
        res.status(200).json(updatedEvent);
    }catch(err){
        next(err);
        // res.status(500).json(err);
    }
});

// Register Event
router.post("/event/register/:_id", async (req, res) => {
    let { _id } = req.params;
    let user_id = req.user._id;
  
    try {
      let event = await Event.findOne({ _id });
      event.participant.push(user_id);
      await event.save();
      res.send("Register completed.");
    } catch (err) {
      res.send(err);
    }
  });

// Delete event
router.delete("event/:_id", async (req, res) => {
    let { _id } = req.params;
    let event = await Event.findOne({ _id });
    if (!event) {
        res.status(404);
        return res.json({
            success: false,
            message: "Event not found.",
        });
    }
    if (event.host.equals(req.user._id)) {
        Event.deleteOne({ _id })
            .then(() => {
                res.send("Event deleted.");
            })
            .catch((e) => {
                res.send({
                    success:false,
                    message: e,
                });
            });
    } else {
        res.status(403);
        return res.json({
            success: false,
            message:
                "Only the host of this event can delete it."
        });
    };
});

// an event unparticipated by an user
router.patch("/:_id", async (req, res) => {
    let { _id } = req.params;
    let { user_id } = req.body;

    try {
        let event= await Event.findByIdAndUpdate( { _id });
        event.participant.pull(user_id);
        await event.save();
        res.send("successful");
    } catch (err) {
        res.send(err);
        }
});


module.exports = router;