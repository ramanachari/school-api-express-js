import { Router } from "express";

import {
    getAllTeachers,
    getTeacherById,
    createTeacher,
    updateTeacher,
    deleteTeacher
} from "../controllers/teacherController.js";


const router = Router();


/**
 * @swagger
 * tags:
 *   name: Teachers
 *   description: Teacher management APIs
 */


/**
 * @swagger
 * /api/teachers:
 *   get:
 *     tags:
 *       - Teachers
 *     summary: Get all teachers
 *     responses:
 *       200:
 *         description: List of teachers
 */
router.get("/", getAllTeachers);



/**
 * @swagger
 * /api/teachers/{id}:
 *   get:
 *     tags:
 *       - Teachers
 *     summary: Get teacher by id
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Teacher details
 */
router.get("/:id", getTeacherById);



/**
 * @swagger
 * /api/teachers:
 *   post:
 *     tags:
 *       - Teachers
 *     summary: Create teacher
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             teacherName: David,
 *             subject: Math,
 *             classId: 1
 *     responses:
 *       201:
 *         description: Teacher created
 */
router.post("/", createTeacher);



/**
 * @swagger
 * /api/teachers/{id}:
 *   put:
 *     tags:
 *       - Teachers
 *     summary: Update teacher
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Teacher updated
 */
router.put("/:id", updateTeacher);



/**
 * @swagger
 * /api/teachers/{id}:
 *   delete:
 *     tags:
 *       - Teachers
 *     summary: Delete teacher
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 */
router.delete("/:id", deleteTeacher);


export default router;