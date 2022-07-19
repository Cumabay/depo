import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  // 'This action adds a new user'
  async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.save(createUserDto);
    return user;
  }

  // `This action returns all users`
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  // `This action returns a #${id} user`
  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id: id });
    if (user) {
      return user;
    }
    throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    this.usersRepository.update({ id: id }, updateUserDto);
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    const user = await this.usersRepository.findOneBy({ id: id });
    if (user) {
      this.usersRepository.delete(id);
      return `This action removes a #${id} user`;
    }
    throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
  }
}
