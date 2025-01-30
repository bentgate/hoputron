import { Test, TestingModule } from '@nestjs/testing';
import { HopController } from './hop.controller';
import { HopService } from './hop.service';

describe('HopController', () => {
  let controller: HopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HopController],
      providers: [HopService],
    }).compile();

    controller = module.get<HopController>(HopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
