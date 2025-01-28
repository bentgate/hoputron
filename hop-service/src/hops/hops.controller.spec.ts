import { Test, TestingModule } from '@nestjs/testing';
import { HopsController } from './hops.controller';

describe('HopsController', () => {
  let controller: HopsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HopsController],
    }).compile();

    controller = module.get<HopsController>(HopsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
