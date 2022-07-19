import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Pallet } from './pallets/entities/pallet.entity';
import { PalletsModule } from './pallets/pallets.module';
import { Truck } from './trucks/entities/truck.entity';
import { TrucksModule } from './trucks/trucks.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mydbdepo',
      entities: [Pallet, Truck, User],
      // logging: false,
      synchronize: true,
    }),
    PalletsModule,
    TrucksModule,
    AuthModule,
    UsersModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
