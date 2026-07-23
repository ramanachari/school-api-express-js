// repositories/authRepository.js

import { getPool } from "../config/database.js";

export default class AuthRepository {

    async getUserByUsername(username) {

        const pool = getPool();

        const result = await pool.request()
            .input("Username", username)
            .query(`
                SELECT *
                FROM Users
                WHERE Username = @Username
            `);

        return result.recordset[0];
    }
}