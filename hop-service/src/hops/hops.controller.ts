import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Repository } from 'typeorm';
import { Hop } from './hop.entity';

@Controller('hops')
@ApiTags('hops')
export class HopsController {
  constructor(
    @InjectRepository(Hop)
    private readonly hopRepository: Repository<Hop>,
  ) { }

  @Get()
  @ApiOperation({ summary: 'Get all hops' })
  @ApiResponse({ status: 200, description: 'List of hops retrieved successfully.' })
  async findAll() {
    return this.hopRepository.find();
  }

  @Post()
  @ApiOperation({ summary: 'Add a new hop' })
  @ApiResponse({ status: 201, description: 'Hop created successfully.' })
  create(@Body() createHopDto: Hop) {
    this.hopRepository.create(createHopDto);

    return { message: 'Hop added successfully', data: createHopDto };
  }
}
