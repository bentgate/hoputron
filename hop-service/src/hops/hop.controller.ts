import { Controller, Get, Post, Body, Patch, Param, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { HopService } from './hop.service';
import { CreateHopDto } from './dto/create-hop.dto';
import { UpdateHopDto } from './dto/update-hop.dto';
import { SearchHopsDto } from './dto/hopQueries.dto';

@Controller('hops')
export class HopController {
  constructor(private readonly hopService: HopService) { }

  @Post()
  create(@Body() createHopDto: CreateHopDto) {
    return this.hopService.create(createHopDto);
  }

  @Get('search')
  @UsePipes(new ValidationPipe({ transform: true }))
  async searchHops(@Query() query: SearchHopsDto) {
    return this.hopService.search(query);
  }

  @Get()
  findAll() {
    return this.hopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hopService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHopDto: UpdateHopDto) {
    return this.hopService.update(+id, updateHopDto);
  }
}
