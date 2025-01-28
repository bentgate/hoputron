import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Repository } from 'typeorm';
import { Hop } from './hops/hop.entity';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const hopRepository = app.get<Repository<Hop>>('HopRepository');

  const filePath = path.join(__dirname, 'data', 'hops-data.json');
  const hopsData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  for (const hop of hopsData) {
    const exists = await hopRepository.findOne({ where: { name: hop.name } });
    if (!exists) {
      await hopRepository.save(hop);
    }
  }

  console.log('Hop data seeding completed!');
  await app.close();
}

bootstrap();
