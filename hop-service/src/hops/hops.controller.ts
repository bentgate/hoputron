import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hop } from './hop.entity';

@Controller('hops')
export class HopsController {
  constructor(
    @InjectRepository(Hop)
    private readonly hopRepository: Repository<Hop>,
  ) { }

  @Get()
  async findAll() {
    return this.hopRepository.find();
  }
}
