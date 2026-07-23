import { Router } from "express";

import {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
} from "../controllers/studentController.js";


const router = Router();


/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Student management APIs
 */


/**
 * @swagger
 * /api/students:
 *   get:
 *     tags:
 *       - Students
 *     summary: Get all students
 *     responses:
 *       200:
 *         description: List of students
 */
router.get("/", getAllStudents);



/**
 * @swagger
 * /api/students/{id}:
 *   get:
 *     tags:
 *       - Students
 *     summary: Get student by id
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student details
 */
router.get("/:id", getStudentById);



/**
 * @swagger
 * /api/students:
 *   post:
 *     tags:
 *       - Students
 *     summary: Create student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: John
 *             age: 15
 *             classId: 1
 *     responses:
 *       201:
 *         description: Student created
 */
router.post("/", createStudent);



/**
 * @swagger
 * /api/students/{id}:
 *   put:
 *     tags:
 *       - Students
 *     summary: Update student
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 */
router.put("/:id", updateStudent);



/**
 * @swagger
 * /api/students/{id}:
 *   delete:
 *     tags:
 *       - Students
 *     summary: Delete student
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 */
router.delete("/:id", deleteStudent);


export default router;