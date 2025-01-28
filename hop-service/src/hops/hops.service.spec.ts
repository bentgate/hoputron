import { Test, TestingModule } from '@nestjs/testing';
import { HopsService } from './hops.service';

describe('HopsService', () => {
  let service: HopsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HopsService],
    }).compile();

    service = module.get<HopsService>(HopsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
