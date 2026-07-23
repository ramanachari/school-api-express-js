import * as classService from "../services/classService.js";


export const getAllClasses = async(req,res)=>{

    const result = await classService.getAllClasses();

    res.json(result);
};


export const getClassById = async(req,res)=>{

    const result =
        await classService.getClassById(req.params.id);

    res.json(result);
};


export const createClass = async(req,res)=>{

    const result =
        await classService.createClass(req.body);

    res.status(201).json(result);
};


export const updateClass = async(req,res)=>{

    const result =
        await classService.updateClass(
            req.params.id,
            req.body
        );

    res.json(result);
};


export const deleteClass = async(req,res)=>{

    const result =
        await classService.deleteClass(req.params.id);

    res.json(result);
};

export const getClassDetails = async(req,res)=>{

    const result =
        await classService.getClassDetails(req.params.id);


    if(!result)
    {
        return res.status(404)
            .json({
                message:"Class not found"
            });
    }


    res.json(result);
};