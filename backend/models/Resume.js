/* ================================
   Skills Schema
================================ */

const SkillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    category: {
      type: String,
      enum: [
        "Programming",
        "Framework",
        "Database",
        "Cloud",
        "DevOps",
        "Tool",
        "Language",
        "Soft Skill",
        "Other",
      ],
      default: "Other",
    },

    level: {
      type: String,
      enum: [
        "Beginner",
        "Intermediate",
        "Advanced",
        "Expert",
      ],
      default: "Intermediate",
    },

    yearsOfExperience: {
      type: Number,
      default: 0,
      min: 0,
      max: 50,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    displayOrder: {
      type: Number,
      default: 0,
    },
  },
  { _id: true }
);

/* ================================
   Certifications Schema
================================ */

const CertificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    organization: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    issueDate: {
      type: Date,
    },

    expiryDate: {
      type: Date,
    },

    credentialId: {
      type: String,
      trim: true,
      default: "",
    },

    credentialURL: {
      type: String,
      trim: true,
      default: "",
    },

    description: {
      type: String,
      trim: true,
      maxlength: 1000,
      default: "",
    },

    doesExpire: {
      type: Boolean,
      default: false,
    },

    displayOrder: {
      type: Number,
      default: 0,
    },
  },
  { _id: true }
);

/* ================================
   Languages Schema
================================ */

const LanguageSchema = new mongoose.Schema(
  {
    language: {
      type: String,
      required: true,
      trim: true,
    },

    proficiency: {
      type: String,
      enum: [
        "Basic",
        "Conversational",
        "Professional",
        "Fluent",
        "Native",
      ],
      default: "Professional",
    },

    read: {
      type: Boolean,
      default: true,
    },

    write: {
      type: Boolean,
      default: true,
    },

    speak: {
      type: Boolean,
      default: true,
    },

    displayOrder: {
      type: Number,
      default: 0,
    },
  },
  { _id: true }
);

/* ================================
   Achievement Schema
================================ */

const AchievementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    issuer: {
      type: String,
      trim: true,
      default: "",
    },

    date: {
      type: Date,
    },

    description: {
      type: String,
      trim: true,
      maxlength: 1000,
      default: "",
    },

    url: {
      type: String,
      trim: true,
      default: "",
    },

    displayOrder: {
      type: Number,
      default: 0,
    },
  },
  { _id: true }
);

/* ================================
   Interests Schema
================================ */

const InterestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    icon: {
      type: String,
      default: "",
    },

    displayOrder: {
      type: Number,
      default: 0,
    },
  },
  { _id: true }
);

/* ================================
   Reference Schema
================================ */

const ReferenceSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    designation: {
      type: String,
      trim: true,
      default: "",
    },

    company: {
      type: String,
      trim: true,
      default: "",
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: "",
    },

    phone: {
      type: String,
      trim: true,
      default: "",
    },

    relationship: {
      type: String,
      trim: true,
      default: "",
    },

    address: {
      type: String,
      trim: true,
      default: "",
    },

    displayOrder: {
      type: Number,
      default: 0,
    },
  },
  { _id: true }
);

/* ================================
   Custom Section Schema
================================ */

const CustomSectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    content: {
      type: String,
      default: "",
      maxlength: 10000,
    },

    isVisible: {
      type: Boolean,
      default: true,
    },

    displayOrder: {
      type: Number,
      default: 0,
    },
  },
  { _id: true }
);