import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
    getAllClasses,
    getClassById,
    createClass,
    updateClass,
    getClassDetails,
    deleteClass
} from "../controllers/classController.js";


const router = Router();


/**
 * @swagger
 * tags:
 *   name: Classes
 *   description: Class management APIs
 */


/**
 * @swagger
 * /api/classes:
 *   get:
 *     tags:
 *       - Classes
 *     summary: Get all classes
 *     responses:
 *       200:
 *         description: List of classes
 */
router.get("/", getAllClasses);



/**
 * @swagger
 * /api/classes/details/{id}:
 *   get:
 *     tags:
 *       - Classes
 *     summary: Get class details with teachers and students
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Class details
 *       401:
 *         description: Unauthorized
 */
router.get(
    "/details/:id",
    authMiddleware,
    getClassDetails
);


/**
 * @swagger
 * /api/classes/{id}:
 *   get:
 *     tags:
 *       - Classes
 *     summary: Get class by id
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Class details
 */
router.get("/:id", getClassById);



/**
 * @swagger
 * /api/classes:
 *   post:
 *     tags:
 *       - Classes
 *     summary: Create class
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             className: Class 1
 *             section: A
 *     responses:
 *       201:
 *         description: Class created
 */
router.post("/", createClass);



/**
 * @swagger
 * /api/classes/{id}:
 *   put:
 *     tags:
 *       - Classes
 *     summary: Update class
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Class updated
 */
router.put("/:id", updateClass);



/**
 * @swagger
 * /api/classes/{id}:
 *   delete:
 *     tags:
 *       - Classes
 *     summary: Delete class
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Class deleted
 */
router.delete("/:id", deleteClass);


export default router;