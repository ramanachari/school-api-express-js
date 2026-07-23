// services/authService.js

import jwt from "jsonwebtoken";

export default class AuthService {

    constructor({ authRepository }) {
        this.authRepository = authRepository;
    }

    async login(username, password) {

        const user = await this.authRepository.getUserByUsername(username);

        if (!user || user.Password !== password) {
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
    }
}