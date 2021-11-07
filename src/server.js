import express from "express";
import { connectDB } from "./config/mongodb.js";
import { env } from "./config/enviroment.js";

const app = express();

const port = env.PORT;
connectDB().catch((err) => console.log(err));

app.get("/", (req, res) => {
	res.send("hello word");
});

app.listen(port, () => {
	console.log(`server is runing ${port}`);
});
