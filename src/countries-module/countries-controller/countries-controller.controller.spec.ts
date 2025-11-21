import { Test, TestingModule } from '@nestjs/testing';
import { CountriesControllerController } from './countries-controller.controller';

describe('CountriesControllerController', () => {
  let controller: CountriesControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountriesControllerController],
    }).compile();

    controller = module.get<CountriesControllerController>(CountriesControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
