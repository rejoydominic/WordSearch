import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { WordSearchService } from './word-search.service';

describe('WordSearch Service', () => {
  beforeEachProviders(() => [WordSearchService]);

  it('should ...',
      inject([WordSearchService], (service: WordSearchService) => {
    expect(service).toBeTruthy();
  }));
});
