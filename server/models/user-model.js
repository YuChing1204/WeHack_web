const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
      email: {
        type: String,
        required: true,
        unique: true,
        minLength:6,
        maxLength:50,
      },
      name:{
          type: String,
          required: true,
          minLength:3,
          maxLength:50,
      },
      password: {
        type: String,
        required: true,
        minLength:6,
        maxLength:1024,
      },
    //   community: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Community",
    //   },
      phone: {
        type: String,
      },
    }
);

// mongoose schema middlewares
userSchema.pre("save", async function(next) {
    if(this.isModified("password") || this.isNew) {
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
        next();
    } else{
        return next();
    }
});

userSchema.methods.comparePassword = function(password, callback) {
    // password: plain text from user input
    //this.password: the hashed password
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if(err) {
            return callback(err, isMatch)
        }
        callback(null, isMatch);
    });
};

module.exports = mongoose.model("User", userSchema);