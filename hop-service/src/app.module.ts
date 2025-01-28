import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HopsModule } from './hops/hops.module';
import { Hop } from './hops/hop.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    HopsModule,
    TypeOrmModule.forFeature([Hop]),

  ],
})
export class AppModule { }
