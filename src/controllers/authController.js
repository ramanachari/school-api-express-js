// controllers/authController.js

export default class AuthController {

    constructor({ authService }) {
        this.authService = authService;
    }

    login = async (req, res, next) => {

        try {

            const { username, password } = req.body;

            const result = await this.authService.login(username, password);

            res.json(result);

        } catch (error) {
            next(error);
        }
    };
}