import { Component, OnInit } from '@angular/core';
import { WordSearchService } from './word-search.service';

@Component({
  moduleId: module.id,
  selector: 'app-word-search-game',
  templateUrl: 'word-search-game.component.html',
  styleUrls: ['word-search-game.component.css'],
  providers: [WordSearchService]
})
export class WordSearchGameComponent implements OnInit {

  constructor(public wordSearchService:WordSearchService) {
    
  }

  ngOnInit() {
    console.log(this.wordSearchService.getWords());
  }
  
  createMatrix(){
    this.wordSearchService.createNewMatrix();
    
  }
}
