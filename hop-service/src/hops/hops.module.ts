import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HopsController } from './hops.controller';
import { HopsService } from './hops.service';
import { Hop } from './hop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hop])],
  controllers: [HopsController],
  providers: [HopsService],
  exports: [TypeOrmModule], // Make sure the repository is exported
})
export class HopsModule { }
