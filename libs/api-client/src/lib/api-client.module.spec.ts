import { async, TestBed } from '@angular/core/testing';
import { ApiClientModule } from './api-client.module';

describe('ApiClientModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ApiClientModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ApiClientModule).toBeDefined();
  });
});
