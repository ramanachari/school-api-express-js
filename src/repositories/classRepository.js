import { getPool } from "../config/database.js";

export const getAllClasses = async () => {

    const pool = getPool();

    const result = await pool.request()
        .query(`
            SELECT *
            FROM Classes
        `);

    return result.recordset;
};


export const getClassById = async (id) => {

    const pool = getPool();

    const result = await pool.request()
        .input("id", id)
        .query(`
            SELECT *
            FROM Classes
            WHERE ClassId = @id
        `);

    return result.recordset[0];
};


export const createClass = async (classData) => {

    const pool = getPool();

    const result = await pool.request()
        .input("className", classData.className)
        .input("section", classData.section)
        .query(`
            INSERT INTO Classes
            (
                ClassName,
                Section
            )
            VALUES
            (
                @className,
                @section
            );

            SELECT SCOPE_IDENTITY() AS ClassId;
        `);

    return result.recordset[0];
};


export const updateClass = async (id, classData) => {

    const pool = getPool();

    await pool.request()
        .input("id", id)
        .input("className", classData.className)
        .input("section", classData.section)
        .query(`
            UPDATE Classes
            SET
                ClassName=@className,
                Section=@section
            WHERE ClassId=@id
        `);

    return {
        message:"Class updated successfully"
    };
};


export const deleteClass = async (id) => {

    const pool = getPool();

    await pool.request()
        .input("id", id)
        .query(`
            DELETE FROM Classes
            WHERE ClassId=@id
        `);

    return {
        message:"Class deleted successfully"
    };
};