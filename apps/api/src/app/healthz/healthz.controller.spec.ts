import { Test, TestingModule } from '@nestjs/testing';
import { HealthCheckService } from './healthcheck.service';
import { HealthCheckController } from './healthz.controller';

describe('HealthCheckController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [HealthCheckController],
      providers: [HealthCheckService],
    }).compile();
  });

  describe('getData', () => {
    it('should return OK', () => {
      const appController = app.get<HealthCheckController>(HealthCheckController);
      expect(appController.get()).toEqual({status: 'OK'});
    });
  });
});
