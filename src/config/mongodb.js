import { MongoClient } from "mongodb";
import { env } from "./enviroment.js";

const uri = env.MONGODB_URI;
let dbinstance = null;

export const connectDB = async () => {
	const client = new MongoClient(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	await client.connect();

	dbinstance = client.db(env.DATABASE_NAME);
};

export const getDb = async () => {
	if (!dbinstance) throw new Error("XXXXXX");
	return dbinstance;
};
