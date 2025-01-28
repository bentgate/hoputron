import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  alphaAcid: string;

  @Column({ nullable: true })
  betaAcid: string;

  @Column('text')
  description: string;

  @Column('text')
  aromaFlavor: string;

  @Column({ nullable: true })
  producer: string;

  @Column()
  origin: string;

  @Column('text', { array: true })
  bestPairedWith: string[];

  @Column('text', { array: true })
  replaceWith: string[];

  @Column('text', { array: true })
  beerStyle: string[];
}
