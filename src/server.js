import express from "express";
import { connectDB } from "./config/mongodb.js";
import { env } from "./config/enviroment.js";

connectDB()
	.then(() => {
		console.log("connect database is successfuly");
	})
	.then(() => {
		bootServer();
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

const bootServer = () => {
	const app = express();
	app.get("/test", (req, res) => {
		res.send("hello word");
	});

	app.listen(env.APP_PORT, env.APP_HOST, () => {
		console.log(`server start at ${env.APP_HOST}:${env.APP_PORT}`);
	});
};
