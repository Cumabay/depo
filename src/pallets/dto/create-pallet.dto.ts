import { ApiProperty } from '@nestjs/swagger';

export class CreatePalletDto {
  @ApiProperty({ example: '1.50', description: 'толщина, мм.' })
  readonly thickness: number;

  @ApiProperty({ example: '45', description: 'ширина, см.' })
  readonly wideness: number;

  @ApiProperty({ example: '135', description: 'длина, см.' })
  readonly length: number;

  @ApiProperty({ example: '1100', description: 'кол-во листов, шт.' })
  readonly quantity_pcs: number;

  @ApiProperty({ example: '2,50', description: 'кол-во, м3.' })
  readonly quantity_m3: number;

  @ApiProperty({ example: 'A', description: 'качество' })
  readonly qulity: string;

  @ApiProperty({ example: 'steamed beech', description: 'номенклатура' })
  readonly wood_specie: string;

  @ApiProperty({ example: 'Company Ltd.', description: 'заказ' })
  readonly order: string;
}
