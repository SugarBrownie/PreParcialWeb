import { Test, TestingModule } from '@nestjs/testing';
import { TravelPlansServiceService } from './travel-plans-service.service';

describe('TravelPlansServiceService', () => {
  let service: TravelPlansServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TravelPlansServiceService],
    }).compile();

    service = module.get<TravelPlansServiceService>(TravelPlansServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
