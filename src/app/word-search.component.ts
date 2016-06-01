import { Component } from '@angular/core';
import { WordSearchGameComponent } from './word-search-game';

@Component({
  moduleId: module.id,
  selector: 'word-search-app',
  templateUrl: 'word-search.component.html',
  styleUrls: ['word-search.component.css'],
  directives: [WordSearchGameComponent]
})
export class WordSearchAppComponent {
  title = 'WS';
}