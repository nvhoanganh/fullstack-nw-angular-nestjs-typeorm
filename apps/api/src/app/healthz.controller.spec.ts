import { Test, TestingModule } from '@nestjs/testing';

import { HealthCheckService } from './healthcheck.service';
import { HealthController } from './healthz.controller';

describe('HealthCheckController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [HealthCheckService],
    }).compile();
  });

  describe('getData', () => {
    it('should return OK', () => {
      const appController = app.get<HealthController>(HealthController);
      expect(appController.get()).toEqual({status: 'OK'});
    });
  });
});
