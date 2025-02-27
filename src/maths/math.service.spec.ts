import { Test, TestingModule } from '@nestjs/testing';
import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MathService],
    }).compile();

    service = module.get<MathService>(MathService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return 5 when adding 2 and 3', () => {
    expect(service.add(2, 3)).toBe(5);
  });

  it('should return 1 when subtracting 3 and 2', () => {
    expect(service.subtract(3, 2)).toBe(1);
  });
});
