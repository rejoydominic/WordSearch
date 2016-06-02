import { Component } from '@angular/core';
import { WordSearchGameComponent } from './word-search-game';
import * as _ from 'lodash';
import * as moment from 'moment';


@Component({
  moduleId: module.id,
  selector: 'word-search-app',
  templateUrl: 'word-search.component.html',
  styleUrls: ['word-search.component.css'],
  directives: [WordSearchGameComponent]
})
export class WordSearchAppComponent {
  title = 'WS ' ;
  constructor(){
    console.log(moment().format('mm-dd-yy'));
    console.log(_([4,2,3]).sort().value());
    
  }
}