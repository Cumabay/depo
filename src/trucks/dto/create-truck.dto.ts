import { ApiProperty } from '@nestjs/swagger';

export class CreateTruckDto {
  @ApiProperty({ example: 'AA 1234 BB', description: 'Рег. номер авто' })
  readonly car_reg_number: string;

  @ApiProperty({ example: 'Mercedes-Benz', description: 'Марка авто' })
  readonly car_mark: string;

  @ApiProperty({ example: 'Actros', description: 'Модель авто' })
  readonly car_model: string;

  @ApiProperty({ example: 'Белый', description: 'Цвет авто' })
  readonly car_color: string;

  @ApiProperty({ example: 'TT 9876 XX', description: 'Рег. номер прицепа' })
  readonly romork_reg_number: string;

  @ApiProperty({ example: 'Schwarzmiller', description: 'Марка прицепа' })
  readonly romork_mark: string;
}
