import { getPool } from "../config/database.js";

export const getUserByUsername = async (username) => {

    const pool = getPool();

    const result = await pool.request()
        .input("Username", username)
        .query(`
            SELECT *
            FROM Users
            WHERE Username = @Username
        `);

    return result.recordset[0];
};