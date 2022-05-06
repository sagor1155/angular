import { TestBed } from '@angular/core/testing';

import { MessagePublishService } from './message-publish.service';

describe('MessagePublishService', () => {
  let service: MessagePublishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagePublishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
