import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "postgres",
	database: "typeorm-app",
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