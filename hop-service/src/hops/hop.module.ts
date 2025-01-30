import { Module } from '@nestjs/common';
import { HopService } from './hop.service';
import { HopController } from './hop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hop } from './entities/hop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hop])],
  controllers: [HopController],
  providers: [HopService],
  exports: [TypeOrmModule],
})
export class HopModule { }
