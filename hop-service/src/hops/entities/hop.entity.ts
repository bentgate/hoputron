import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";

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

  @ManyToMany(() => Hop)
  @JoinTable({
    name: "hop_best_paired_with",
    joinColumn: { name: "hop_id", referencedColumnName: "id" },
    inverseJoinColumn: { name: "paired_hop_id", referencedColumnName: "id" }
  })
  bestPairedWith: Hop[];

  @ManyToMany(() => Hop)
  @JoinTable({
    name: "hop_replace_with",
    joinColumn: { name: "hop_id", referencedColumnName: "id" },
    inverseJoinColumn: { name: "replacement_hop_id", referencedColumnName: "id" }
  })
  replaceWith: Hop[];
}
