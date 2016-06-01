import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { WordSearchGameComponent } from './word-search-game.component';

describe('Component: WordSearchGame', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [WordSearchGameComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([WordSearchGameComponent],
      (component: WordSearchGameComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(WordSearchGameComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(WordSearchGameComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-word-search-game></app-word-search-game>
  `,
  directives: [WordSearchGameComponent]
})
class WordSearchGameComponentTestController {
}

