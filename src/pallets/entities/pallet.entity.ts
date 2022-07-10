import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pallet {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 1.5, description: 'Толщина, мм' })
  @Column()
  thickness: number;

  @Column()
  wideness: number;

  @Column()
  length: number;

  @Column()
  quantity_pcs: number;

  @Column()
  quantity_m3: number;

  @Column()
  qulity: string;

  @Column()
  wood_specie: string;

  @Column()
  order: string;
}
