import sql from "mssql";
import dotenv from "dotenv";

dotenv.config();

const dbConfig = {

    user: process.env.DB_USER,

    password: process.env.DB_PASSWORD,

    server: process.env.DB_SERVER,

    database: process.env.DB_DATABASE,

    port: Number(process.env.DB_PORT),

    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};


let pool;


export const connectDB = async () => {

    try {

        pool = await sql.connect(dbConfig);

        console.log("✅ SQL Server Connected");

    }
    catch (error) {

        console.error("❌ Database Connection Failed");
        console.error(error);

    }
};


export const getPool = () => pool;