import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WordSearchAppComponent } from '../app/word-search.component';

beforeEachProviders(() => [WordSearchAppComponent]);

describe('App: WordSearch', () => {
  it('should create the app',
      inject([WordSearchAppComponent], (app: WordSearchAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'word-search works!\'',
      inject([WordSearchAppComponent], (app: WordSearchAppComponent) => {
    expect(app.title).toEqual('word-search works!');
  }));
});
