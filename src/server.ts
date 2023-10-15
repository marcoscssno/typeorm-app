import { DataSource } from "typeorm";
import { Client } from "./entities/Client";

const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "postgres",
	database: "typeorm-app",
	entities: [Client],
	synchronize: true
});

const main = async () => {
	try {
		await AppDataSource.initialize();
		console.log("Data Source initialized");
	} catch (error) {
		console.log(error);
	}
};

main();