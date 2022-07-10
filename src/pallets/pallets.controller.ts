import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PalletsService } from './pallets.service';
import { CreatePalletDto } from './dto/create-pallet.dto';
import { UpdatePalletDto } from './dto/update-pallet.dto';

@Controller('pallets')
export class PalletsController {
  constructor(private readonly palletsService: PalletsService) {}

  @Post()
  create(@Body() createPalletDto: CreatePalletDto) {
    return this.palletsService.create(createPalletDto);
  }

  @Get()
  findAll() {
    return this.palletsService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    // return this.palletsService.findOne({ id });
    return this.palletsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePalletDto: UpdatePalletDto,
  ): Promise<string> {
    return this.palletsService.update(+id, updatePalletDto);
  }

  @Delete(':id/delete')
  remove(@Param('id') id) {
    return this.palletsService.remove(id);
  }
}
