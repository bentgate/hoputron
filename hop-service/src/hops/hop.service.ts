import { Injectable } from '@nestjs/common';
import { CreateHopDto } from './dto/create-hop.dto';
import { UpdateHopDto } from './dto/update-hop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hop } from './entities/hop.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HopService {

  constructor(
    @InjectRepository(Hop)
    private readonly hopRepository: Repository<Hop>,
  ) { }

  create(createHopDto: CreateHopDto) {
    return this.hopRepository.create(createHopDto);
  }

  async findAll() {
    return await this.hopRepository.find();
  }

  async findOne(id: number) {
    return await this.hopRepository.findOneOrFail({ where: { id } });
  }

  update(id: number, updateHopDto: UpdateHopDto) {
    return this.hopRepository.update(id, { ...updateHopDto })
  }
}
