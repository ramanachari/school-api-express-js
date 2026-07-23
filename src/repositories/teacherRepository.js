import { getPool } from "../config/database.js";


export const getAllTeachers = async()=>{

    const pool=getPool();

    const result =
        await pool.request()
        .query(`
            SELECT *
            FROM Teachers
        `);

    return result.recordset;
};



export const getTeacherById = async(id)=>{

    const pool=getPool();

    const result =
        await pool.request()
        .input("id",id)
        .query(`
            SELECT *
            FROM Teachers
            WHERE TeacherId=@id
        `);

    return result.recordset[0];
};



export const createTeacher = async(teacher)=>{

    const pool=getPool();

    const result =
        await pool.request()
        .input("name",teacher.teacherName)
        .input("subject",teacher.subject)
        .input("classId",teacher.classId)
        .query(`
            INSERT INTO Teachers
            (
                TeacherName,
                Subject,
                ClassId
            )
            VALUES
            (
                @name,
                @subject,
                @classId
            );

            SELECT SCOPE_IDENTITY() AS TeacherId;
        `);

    return result.recordset[0];
};



export const updateTeacher = async(id,teacher)=>{

    const pool=getPool();

    await pool.request()
    .input("id",id)
    .input("name",teacher.teacherName)
    .input("subject",teacher.subject)
    .input("classId",teacher.classId)
    .query(`
        UPDATE Teachers
        SET
            TeacherName=@name,
            Subject=@subject,
            ClassId=@classId
        WHERE TeacherId=@id
    `);

    return {
        message:"Teacher updated successfully"
    };
};



export const deleteTeacher = async(id)=>{

    const pool=getPool();

    await pool.request()
    .input("id",id)
    .query(`
        DELETE FROM Teachers
        WHERE TeacherId=@id
    `);

    return {
        message:"Teacher deleted successfully"
    };
};

export const getTeachersByClassId = async (classId) => {

    const pool = getPool();

    const result = await pool.request()
        .input("classId", classId)
        .query(`
            SELECT *
            FROM Teachers
            WHERE ClassId = @classId
        `);

    return result.recordset;
};