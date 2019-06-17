import { Test } from '@nestjs/testing';

import { HealthCheckService } from './app.service';

describe('AppService', () => {
  let service: HealthCheckService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [HealthCheckService],
    }).compile();

    service = app.get<HealthCheckService>(HealthCheckService);
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      expect(service.getData()).toEqual({message: 'Welcome to api!'});
    });
  });
});
