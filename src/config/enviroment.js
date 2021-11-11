import dotenv from "dotenv";
dotenv.config();

export const env = {
	MONGODB_URI: process.env.MONGODB_URI,
	APP_PORT: process.env.APP_PORT,
	APP_HOST: process.env.APP_HOST,
	DATABASE_NAME: process.env.DATABASE_NAME,
};
