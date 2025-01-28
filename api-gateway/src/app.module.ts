import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { HopProxyController } from './hop-proxy/hop-proxy.controller';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    HttpModule,
    ConfigModule.forRoot(),
  ],
  controllers: [HopProxyController],
})
export class AppModule { }
