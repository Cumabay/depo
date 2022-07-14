import { Module } from '@nestjs/common';
import { TrucksService } from './trucks.service';
import { TrucksController } from './trucks.controller';
import { Truck } from './entities/truck.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Truck])],
  controllers: [TrucksController],
  providers: [TrucksService],
})
export class TrucksModule {}
