import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { HopModule } from './hops/hop.module';
import { Hop } from './hops/entities/hop.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make .env variables accessible globally
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV === 'production' ? false : true,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    }),
    HopModule,
    TypeOrmModule.forFeature([Hop]),
    HopModule,

  ],
})
export class AppModule { }
