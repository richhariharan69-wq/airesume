const express = require("express");
const router = express.Router();

const {
  createResume,
  getAllResumes,
  getResumeById,
  updateResume,
  deleteResume,
  restoreResume,
  duplicateResume,
  autoSaveResume,
  updateResumeSection,
  changeResumeTemplate,
  updateVisibility,
  getResumeStats,
} = require("../controllers/resumeController");

const authMiddleware = require("../middlewares/authMiddleware");

/*
|--------------------------------------------------------------------------
| Resume CRUD
|--------------------------------------------------------------------------
*/

router.post("/", authMiddleware, createResume);

router.get("/", authMiddleware, getAllResumes);

router.get("/stats", authMiddleware, getResumeStats);

router.get("/:id", authMiddleware, getResumeById);

router.put("/:id", authMiddleware, updateResume);

router.delete("/:id", authMiddleware, deleteResume);

/*
|--------------------------------------------------------------------------
| Resume Restore
|--------------------------------------------------------------------------
*/

router.patch("/:id/restore", authMiddleware, restoreResume);

/*
|--------------------------------------------------------------------------
| Duplicate Resume
|--------------------------------------------------------------------------
*/

router.post("/:id/duplicate", authMiddleware, duplicateResume);

/*
|--------------------------------------------------------------------------
| Auto Save
|--------------------------------------------------------------------------
*/

router.patch("/:id/autosave", authMiddleware, autoSaveResume);

/*
|--------------------------------------------------------------------------
| Update Single Section
|--------------------------------------------------------------------------
*/

router.patch(
  "/:id/section/:section",
  authMiddleware,
  updateResumeSection
);

/*
|--------------------------------------------------------------------------
| Change Template
|--------------------------------------------------------------------------
*/

router.patch(
  "/:id/template",
  authMiddleware,
  changeResumeTemplate
);

/*
|--------------------------------------------------------------------------
| Visibility
|--------------------------------------------------------------------------
*/

router.patch(
  "/:id/visibility",
  authMiddleware,
  updateVisibility
);

module.exports = router;