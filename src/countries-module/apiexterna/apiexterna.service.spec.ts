import { Test, TestingModule } from '@nestjs/testing';
import { ApiexternaService } from './apiexterna.service';

describe('ApiexternaService', () => {
  let service: ApiexternaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiexternaService],
    }).compile();

    service = module.get<ApiexternaService>(ApiexternaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
