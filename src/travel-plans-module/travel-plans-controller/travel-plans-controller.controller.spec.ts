import { Test, TestingModule } from '@nestjs/testing';
import { TravelPlansControllerController } from './travel-plans-controller.controller';

describe('TravelPlansControllerController', () => {
  let controller: TravelPlansControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelPlansControllerController],
    }).compile();

    controller = module.get<TravelPlansControllerController>(TravelPlansControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
