import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTruckDto } from './dto/create-truck.dto';
import { UpdateTruckDto } from './dto/update-truck.dto';
import { Truck } from './entities/truck.entity';

@Injectable()
export class TrucksService {
  constructor(
    @InjectRepository(Truck)
    private trucksRepository: Repository<Truck>,
  ) {}

  //This action adds a new truck
  async create(createTruckDto: CreateTruckDto) {
    const truck = this.trucksRepository.save(createTruckDto);
    return truck;
  }

  //This action returns all trucks
  findAll(): Promise<Truck[]> {
    const trucks = this.trucksRepository.find();
    return trucks; //`This action returns all trucks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} truck`;
  }

  update(id: number, updateTruckDto: UpdateTruckDto) {
    this.trucksRepository.update({ id: id }, updateTruckDto);
    return `This action updates a #${id} truck`;
  }

  remove(id: number) {
    return `This action removes a #${id} truck`;
  }
}
