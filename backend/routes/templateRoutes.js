const express = require("express");
const router = express.Router();

const {
    createTemplate,
    getAllTemplates,
    getTemplateById,
    updateTemplate,
    deleteTemplate,
    getActiveTemplates,
    getFeaturedTemplates,
    getPremiumTemplates,
    getFreeTemplates,
    activateTemplate,
    deactivateTemplate,
    setDefaultTemplate,
    incrementUsage,
    incrementDownload
} = require("../controllers/templateController");

const authMiddleware = require("../middlewares/authMiddleware");

// const adminMiddleware = require("../middlewares/adminMiddleware");

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// Get all active templates
router.get("/active", getActiveTemplates);

// Get featured templates
router.get("/featured", getFeaturedTemplates);

// Get premium templates
router.get("/premium", getPremiumTemplates);

// Get free templates
router.get("/free", getFreeTemplates);

// Get template by ID
router.get("/:id", getTemplateById);


/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

// Get all templates
router.get("/", authMiddleware, getAllTemplates);

// Create template
router.post(
    "/",
    authMiddleware,
    // adminMiddleware,
    createTemplate
);

// Update template
router.put(
    "/:id",
    authMiddleware,
    // adminMiddleware,
    updateTemplate
);

// Delete template
router.delete(
    "/:id",
    authMiddleware,
    // adminMiddleware,
    deleteTemplate
);

// Activate template
router.patch(
    "/:id/activate",
    authMiddleware,
    // adminMiddleware,
    activateTemplate
);

// Deactivate template
router.patch(
    "/:id/deactivate",
    authMiddleware,
    // adminMiddleware,
    deactivateTemplate
);

// Set default template
router.patch(
    "/:id/default",
    authMiddleware,
    // adminMiddleware,
    setDefaultTemplate
);

// Increase usage count
router.patch(
    "/:id/use",
    authMiddleware,
    incrementUsage
);

// Increase download count
router.patch(
    "/:id/download",
    authMiddleware,
    incrementDownload
);

module.exports = router;