const express = require("express");
const router = express.Router();

const {
    getResumePreview,
    getTemplatePreview,
    getLivePreview,
    downloadPreviewImage,
    refreshPreview
} = require("../controllers/previewController");

const authMiddleware = require("../middlewares/authMiddleware");

/*
|--------------------------------------------------------------------------
| Resume Preview Routes
|--------------------------------------------------------------------------
*/

// Generate Resume Preview
router.get(
    "/resume/:resumeId",
    authMiddleware,
    getResumePreview
);

// Live Preview
router.post(
    "/live",
    authMiddleware,
    getLivePreview
);

// Generate Preview using Template
router.get(
    "/template/:templateId/resume/:resumeId",
    authMiddleware,
    getTemplatePreview
);

// Refresh Preview
router.patch(
    "/resume/:resumeId/refresh",
    authMiddleware,
    refreshPreview
);

// Download Preview Image
router.get(
    "/download/:resumeId",
    authMiddleware,
    downloadPreviewImage
);

module.exports = router;