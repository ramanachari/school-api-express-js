import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "School API",
            version: "1.0.0",
            description: "Student, Teacher and Class Management API"
        },
        tags: [
            {
                name: "Authentication",
                description: "Authentication APIs"
            },
            {
                name: "Students",
                description: "Student management APIs"
            },
            {
                name: "Classes",
                description: "Class management APIs"
            },
            {
                name: "Teachers",
                description: "Teacher management APIs"
            }
        ],
        servers: [
            {
                url: "http://localhost:3000"
            }
        ],
        components: {
            securitySchemes: {
                BearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
    },
    apis: [
        "./src/routes/*.js"
    ]
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;