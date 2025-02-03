import { Injectable } from '@nestjs/common';
import { CreateHopDto } from './dto/create-hop.dto';
import { UpdateHopDto } from './dto/update-hop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hop } from './entities/hop.entity';
import { Repository } from 'typeorm';
import { SearchHopsDto } from './dto/hopQueries.dto';

@Injectable()
export class HopService {

  constructor(
    @InjectRepository(Hop)
    private readonly hopRepository: Repository<Hop>,
  ) { }

  create(createHopDto: CreateHopDto) {
    return this.hopRepository.create(createHopDto);
  }

  async search({ name, flavor, alphaMax, alphaMin }: SearchHopsDto) {
    const queryBuilder = this.hopRepository.createQueryBuilder('hop');

    if (name) queryBuilder.andWhere('hop.name ILIKE :name', { name: `%${name}%` });
    if (flavor) queryBuilder.andWhere(`:flavor = ANY(hop.aromaProfile)`, { flavor });
    if (alphaMin) queryBuilder.andWhere('hop.alphaAcidMin >= :alphaMin', { alphaMin });
    if (alphaMax) queryBuilder.andWhere('hop.alphaAcidMax <= :alphaMax', { alphaMax });

    return queryBuilder.getMany();
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
