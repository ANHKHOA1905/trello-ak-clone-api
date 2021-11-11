import Joi, { date } from "joi";
import { getDb } from "../config/mongodb";

const boardsColectionName = "boards";
const boardsColectionSchema = Joi.object({
	title: Joi.string().required().min(3).max(20),
	columnOrder: Joi.array().items(Joi.string()).default([]),
	createAt: Joi.date().timestamp().default(Date.now()),
	updateAt: Joi.date().timestamp().default(null),
	_detroy: Joi.boolean().default(false),
});

const validateSchema = async (data) => {
	return await boardsColectionSchema.validateAsync(data, { abortEarly: false });
};

const createNew = async (data) => {
	try {
		const value = await validateSchema(data);
		const result = await getDb()
			.collection(boardsColectionName)
			.insertOne(value);
		console.log(result);
		return result;
	} catch (error) {
		throw new err(error);
	}
};

export const BoardModel = { createNew };
