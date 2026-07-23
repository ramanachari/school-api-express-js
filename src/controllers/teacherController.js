import * as teacherService from "../services/teacherService.js";


export const getAllTeachers = async(req,res)=>{

    const result =
        await teacherService.getAllTeachers();

    res.json(result);
};



export const getTeacherById = async(req,res)=>{

    const result =
        await teacherService.getTeacherById(req.params.id);

    res.json(result);
};



export const createTeacher = async(req,res)=>{

    const result =
        await teacherService.createTeacher(req.body);

    res.status(201).json(result);
};



export const updateTeacher = async(req,res)=>{

    const result =
        await teacherService.updateTeacher(
            req.params.id,
            req.body
        );

    res.json(result);
};



export const deleteTeacher = async(req,res)=>{

    const result =
        await teacherService.deleteTeacher(req.params.id);

    res.json(result);
};