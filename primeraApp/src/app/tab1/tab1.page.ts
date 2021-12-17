import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  num:number;
  mayorMenor = '...';
  numSecret:number = this.numAleatorio(0,100);
  count:number=0;
  endCount:boolean=false;
  
  constructor() {}

  numAleatorio(a,b) {
    return Math.round(Math.random() * (b - a) + parseInt(a, 10));
  }

  compruebaNumero() {
    if(this.num){
      if(this.numSecret < this.num){
        this.mayorMenor = 'menor que';
        this.count++;
      }
      else if(this.numSecret > this.num){
        this.mayorMenor = 'mayor que';
        this.count++;
      }
      else {
        this.mayorMenor = '';
        this.endCount = true;
      }
    }
  }

  reinicia(){
    // Reiniciamosls variables
    this.num = null;
    this.mayorMenor = null;
    this.numSecret = this.numAleatorio(0, 100);
    this.count = 0;
    this.endCount = false;
  }
}
