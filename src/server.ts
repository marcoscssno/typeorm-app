import { DataSource } from "typeorm";
import { Client } from "./entities/Client";
import "dotenv/config";
import express from "express";
import { createClientRouter } from "./routes/createClient";

const app = express();

const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.DB_HOST,
	port: 5432,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	entities: [Client],
	synchronize: true
});

const main = async () => {
	try {
		await AppDataSource.initialize();
		console.log("Data Source initialized");
		app.use(express.json());
		app.use(createClientRouter);
		app.listen(8080, () => {
			console.log("Server is running on port 8080");
		});
	} catch (error) {
		console.log(error);
	}
};

main();