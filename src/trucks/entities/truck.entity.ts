import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Truck {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'AA 1234 BB', description: 'Рег. номер авто' })
  @Column()
  car_reg_number: string;

  @ApiProperty({ example: 'Mercedes-Benz', description: 'Марка авто' })
  @Column()
  car_mark: string;

  @ApiProperty({ example: 'Actros', description: 'Модель авто' })
  @Column()
  car_model: string;

  @ApiProperty({ example: 'Белый', description: 'Цвет авто' })
  @Column()
  car_color: string;

  @ApiProperty({ example: 'TT 9876 XX', description: 'Рег. номер прицепа' })
  @Column()
  romork_reg_number: string;

  @ApiProperty({ example: 'Schwarzmiller', description: 'Марка прицепа' })
  @Column()
  romork_mark: string;
}
