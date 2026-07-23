import * as authService from "../services/authService.js";

export const login = async (req, res, next) => {

    try {

        const { username, password } = req.body;

        const result = await authService.login(username, password);

        res.json(result);

    }
    catch (error) {
        next(error);
    }
};