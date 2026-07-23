import { getPool } from "../config/database.js";


export const getAllStudents = async () => {

    const pool = getPool();

    const result = await pool.request()
        .query(`
            SELECT *
            FROM Students
        `);

    return result.recordset;
};


export const getStudentById = async (id) => {

    const pool = getPool();

    const result = await pool.request()
        .input("id", id)
        .query(`
            SELECT *
            FROM Students
            WHERE StudentId = @id
        `);

    return result.recordset[0];
};


export const createStudent = async (student) => {

    const pool = getPool();

    const result = await pool.request()
        .input("name", student.name)
        .input("age", student.age)
        .input("classId", student.classId)
        .query(`
            INSERT INTO Students
            (
                StudentName,
                Age,
                ClassId
            )
            VALUES
            (
                @name,
                @age,
                @classId
            );

            SELECT SCOPE_IDENTITY() AS StudentId;
        `);

    return result.recordset[0];
};


export const updateStudent = async (id, student) => {

    const pool = getPool();

    await pool.request()
        .input("id", id)
        .input("name", student.name)
        .input("age", student.age)
        .input("classId", student.classId)
        .query(`
            UPDATE Students
            SET
                StudentName = @name,
                Age = @age,
                ClassId = @classId
            WHERE StudentId = @id
        `);

    return {
        message: "Student updated"
    };
};


export const deleteStudent = async (id) => {

    const pool = getPool();

    await pool.request()
        .input("id", id)
        .query(`
            DELETE FROM Students
            WHERE StudentId = @id
        `);

    return {
        message: "Student deleted"
    };
};

export const getStudentsByClassId = async (classId) => {

    const pool = getPool();

    const result = await pool.request()
        .input("classId", classId)
        .query(`
            SELECT *
            FROM Students
            WHERE ClassId = @classId
        `);

    return result.recordset;
};