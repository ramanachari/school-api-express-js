import * as studentService from "../services/studentService.js";


export const getAllStudents = async (req,res)=>{

    const students = await studentService.getAllStudents();

    res.json(students);
};


export const getStudentById = async(req,res)=>{

    const student =
        await studentService.getStudentById(req.params.id);

    res.json(student);
};


export const createStudent = async(req,res)=>{

    const student =
        await studentService.createStudent(req.body);

    res.status(201).json(student);
};


export const updateStudent = async(req,res)=>{

    const result =
        await studentService.updateStudent(
            req.params.id,
            req.body
        );

    res.json(result);
};


export const deleteStudent = async(req,res)=>{

    const result =
        await studentService.deleteStudent(req.params.id);

    res.json(result);
};