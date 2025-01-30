import { Test, TestingModule } from '@nestjs/testing';
import { HopService } from './hop.service';

describe('HopService', () => {
  let service: HopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HopService],
    }).compile();

    service = module.get<HopService>(HopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
