import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Hop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ nullable: true })
  country: string;

  @Column("simple-array", { nullable: true })
  aromaProfile: string[];

  @Column("simple-array", { nullable: true })
  styles: string[];

  @Column({ type: "float", nullable: true })
  alphaAcidMin: number;

  @Column({ type: "float", nullable: true })
  alphaAcidMax: number;

  @Column({ type: "float", nullable: true })
  betaAcidMin: number;

  @Column({ type: "float", nullable: true })
  betaAcidMax: number;

  @Column({ type: "float", nullable: true })
  coHumuloneMin: number;

  @Column({ type: "float", nullable: true })
  coHumuloneMax: number;

  @Column({ type: "float", nullable: true })
  totalOilMin: number;

  @Column({ type: "float", nullable: true })
  totalOilMax: number;
}
