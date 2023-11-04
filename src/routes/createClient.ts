import express from "express";
import { Client } from "../entities/Client";

const router = express.Router();

router.post("/api/client", async (req, res) => {
	try {
		const { firstName } = req.body;

		const client = Client.create({
			firstName
		});

		await client.save();

		res.json(client);
	}
	catch (error) {
		console.error(error);
		res.send(error);
	}
});

export {
	router as createClientRouter
};