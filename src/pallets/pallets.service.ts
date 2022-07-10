import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePalletDto } from './dto/create-pallet.dto';
import { UpdatePalletDto } from './dto/update-pallet.dto';
import { Pallet } from './entities/pallet.entity';

@Injectable()
export class PalletsService {
  constructor(
    @InjectRepository(Pallet)
    private palletsRepository: Repository<Pallet>,
  ) {}

  //'This action adds a new pallet'
  async create(createPalletDto: CreatePalletDto) {
    const pallet = this.palletsRepository.save(createPalletDto);
    return pallet;
  }

  //`This action returns all pallets`
  findAll(): Promise<Pallet[]> {
    return this.palletsRepository.find();
  }

  //`This action returns a #${id} pallet`;
  async findOne(id: number): Promise<Pallet> {
    const pallet = await this.palletsRepository.findOneBy({ id: id });
    if (pallet) {
      return pallet;
    }
    throw new HttpException('Палет не найден!', HttpStatus.NOT_FOUND);
  }

  async update(id: number, updatePalletDto: UpdatePalletDto) {
    this.palletsRepository.update({ id: id }, updatePalletDto);
    return `Updated a #${id} pallet`;
  }

  // `This action removes a #${id} pallet`;
  async remove(id: number) {
    const pallet = await this.palletsRepository.findOneBy({ id: id });
    if (pallet) {
      this.palletsRepository.delete(id);
      return `This action removes a #${id} pallet`;
    }
    throw new HttpException('Палет не найден!', HttpStatus.NOT_FOUND);
  }
}
