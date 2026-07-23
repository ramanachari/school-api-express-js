import {
    describe,
    test,
    expect,
    beforeEach,
    jest
} from "@jest/globals";

import AuthService from "../../src/services/authService.js";
process.env.JWT_SECRET = "test-secret";
process.env.JWT_EXPIRES_IN = "1h";

describe("AuthService", () => {

    let authRepository;
    let authService;

    beforeEach(() => {

        authRepository = {
            getUserByUsername: jest.fn()
        };

        authService = new AuthService({
            authRepository
        });
    });

    test("should login successfully", async () => {

        authRepository.getUserByUsername.mockResolvedValue({
            UserId: 1,
            Username: "admin",
            Password: "admin123",
            Role: "Admin"
        });

        const result = await authService.login("admin", "admin123");

        expect(result.username).toBe("admin");
        expect(result.role).toBe("Admin");
        expect(result.token).toBeDefined();
    });

    test("should throw error for invalid password", async () => {

        authRepository.getUserByUsername.mockResolvedValue({
            UserId: 1,
            Username: "admin",
            Password: "admin123",
            Role: "Admin"
        });

        await expect(
            authService.login("admin", "wrongpassword")
        ).rejects.toThrow("Invalid username or password");
    });

    test("should throw error when user not found", async () => {

        authRepository.getUserByUsername.mockResolvedValue(null);

        await expect(
            authService.login("admin", "admin123")
        ).rejects.toThrow("Invalid username or password");
    });

});