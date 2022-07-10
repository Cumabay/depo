import { Module } from '@nestjs/common';
import { PalletsService } from './pallets.service';
import { PalletsController } from './pallets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pallet } from './entities/pallet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pallet])],
  controllers: [PalletsController],
  providers: [PalletsService],
})
export class PalletsModule {}
