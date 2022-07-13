import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Pallet } from './pallets/entities/pallet.entity';
import { PalletsModule } from './pallets/pallets.module';
import { Truck } from './trucks/entities/truck.entity';
import { TrucksModule } from './trucks/trucks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mydbdepo',
      entities: [Pallet, Truck],
      // logging: false,
      synchronize: true,
    }),
    PalletsModule,
    TrucksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
