import { Injectable } from '@angular/core';
import { LetterMatrix } from './letterMatrix'
@Injectable()
export class WordSearchService {

  displayMatrix = [];
  
   getWords():string []{
     let targetWords = [
       'apple',
       'car',
       'bat',
       'hat'
     ];
     
     return targetWords;
   }
   
   createNewMatrix(){
     console.log('Create matrix');
     this.displayMatrix = new LetterMatrix().createMatrix(this.getWords(), 10, 10);
   }
  
}
