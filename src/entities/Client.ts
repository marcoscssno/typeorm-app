import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("client")
class Client extends BaseEntity {

	@PrimaryGeneratedColumn()
		id: number;

	@Column()
		firstName: string;
}

export {
	Client
};
