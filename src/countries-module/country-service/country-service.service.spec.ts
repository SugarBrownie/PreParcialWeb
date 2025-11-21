import { Test, TestingModule } from '@nestjs/testing';
import { CountryServiceService } from './country-service.service';

describe('CountryServiceService', () => {
  let service: CountryServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryServiceService],
    }).compile();

    service = module.get<CountryServiceService>(CountryServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
