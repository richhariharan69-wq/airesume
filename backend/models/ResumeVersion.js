const mongoose = require("mongoose");

const ResumeVersionSchema = new mongoose.Schema(
{
    resume: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resume",
        required: true,
        index: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true
    },

    versionNumber: {
        type: Number,
        required: true,
        min: 1
    },

    title: {
        type: String,
        trim: true,
        default: "Resume Version"
    },

    description: {
        type: String,
        trim: true,
        default: ""
    },

    snapshot: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },

    template: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ResumeTemplate",
        default: null
    },

    templateName: {
        type: String,
        default: ""
    },

    changeType: {
        type: String,
        enum: [
            "CREATE",
            "UPDATE",
            "AUTO_SAVE",
            "MANUAL_SAVE",
            "RESTORE",
            "IMPORT"
        ],
        default: "UPDATE"
    },

    editedSections: [
        {
            type: String
        }
    ],

    notes: {
        type: String,
        trim: true,
        default: ""
    },

    restored: {
        type: Boolean,
        default: false
    },

    restoredAt: {
        type: Date,
        default: null
    },

    restoredBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    }

},
{
    timestamps: true,
    versionKey: false
}
);

/* ===========================
   INDEXES
=========================== */

ResumeVersionSchema.index({
    resume: 1,
    versionNumber: -1
});

ResumeVersionSchema.index({
    user: 1
});

ResumeVersionSchema.index({
    createdAt: -1
});


/* ===========================
   VIRTUAL
=========================== */

ResumeVersionSchema.virtual("isLatest").get(function () {

    return this.restored === false;

});


/* ===========================
   INSTANCE METHODS
=========================== */

ResumeVersionSchema.methods.markAsRestored = async function(userId){

    this.restored = true;

    this.restoredAt = new Date();

    this.restoredBy = userId;

    return await this.save();

};


/* ===========================
   STATIC METHODS
=========================== */

ResumeVersionSchema.statics.getVersions = function(resumeId){

    return this.find({

        resume: resumeId

    })

    .sort({

        versionNumber: -1

    });

};


ResumeVersionSchema.statics.getLatestVersion = function(resumeId){

    return this.findOne({

        resume: resumeId

    })

    .sort({

        versionNumber: -1

    });

};


ResumeVersionSchema.statics.getVersion = function(resumeId, versionNumber){

    return this.findOne({

        resume: resumeId,

        versionNumber

    });

};


ResumeVersionSchema.statics.deleteOldVersions = async function(resumeId, keep = 10){

    const versions = await this.find({

        resume: resumeId

    })

    .sort({

        versionNumber: -1

    });

    if(versions.length <= keep){

        return;

    }

    const removeIds = versions

        .slice(keep)

        .map(v => v._id);

    return this.deleteMany({

        _id: {

            $in: removeIds

        }

    });

};


module.exports = mongoose.model(
    "ResumeVersion",
    ResumeVersionSchema
);  