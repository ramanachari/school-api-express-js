import jwt from "jsonwebtoken";
import * as authRepository from "../repositories/authRepository.js";

export const login = async (username, password) => {

    const user = await authRepository.getUserByUsername(username);

    if (!user) {
        throw new Error("Invalid username or password");
    }

    // Replace with bcrypt.compare() later
    if (user.Password !== password) {
        throw new Error("Invalid username or password");
    }

    const token = jwt.sign(
        {
            userId: user.UserId,
            username: user.Username,
            role: user.Role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    );

    return {
        userId: user.UserId,
        username: user.Username,
        role: user.Role,
        token
    };
};