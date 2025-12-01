import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "livro", schema: "public" })
export class Livro {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
  titulo!: string;

  @Column({ type: "varchar" })
  autor!: string;

  @Column({ type: "varchar", unique: true })
  isbn!: string;

  @Column({ type: "int" })
  anoPublicacao!: number;

  @Column({ type: "boolean", default: true })
  disponivel!: boolean;
}
