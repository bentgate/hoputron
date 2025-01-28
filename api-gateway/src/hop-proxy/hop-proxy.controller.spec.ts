import { Test, TestingModule } from '@nestjs/testing';
import { HopProxyController } from './hop-proxy.controller';

describe('HopProxyController', () => {
  let controller: HopProxyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HopProxyController],
    }).compile();

    controller = module.get<HopProxyController>(HopProxyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
