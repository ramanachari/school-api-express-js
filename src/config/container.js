// config/container.js

import { createContainer, asClass } from "awilix";

import AuthRepository from "../repositories/authRepository.js";
import AuthService from "../services/authService.js";
import AuthController from "../controllers/authController.js";

const container = createContainer();

container.register({
    authRepository: asClass(AuthRepository).singleton(),
    authService: asClass(AuthService).singleton(),
    authController: asClass(AuthController).singleton()
});

export default container;