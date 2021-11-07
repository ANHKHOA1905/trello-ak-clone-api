import { MongoClient } from "mongodb";
import { env } from "./enviroment.js";

const uri = env.MONGODB_URI;

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

export const connectDB = async () => {
	try {
		await client.connect();
		console.log("conect database is successfuly !!!");
	} finally {
		await client.close();
	}
};

const databases = async (client) => {
	await client.db().databases();
	console.log();
};
