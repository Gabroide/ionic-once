import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  num:number;
  num1:number = this.numAleatorio(0,100);
  num2:number = this.numAleatorio(0,100);
  sum:number = this.calculateSum();
  result = "";
  level = "";
  check:boolean = false;
  count:number = 0;

  constructor() {}

  numAleatorio(a,b) {
    return Math.round(Math.random() * (b - a) + parseInt(a, 10));
  }

  calculateSum() {
    return this.num1 + this.num2;
  }

  checkAnswer(){
    if(this.sum == this.num){
      this.result = "Respuesta correcta";
      this.check = true;
      this.count++;
      this.playerLevel();
    }
    else if(this.sum < this.num){
      this.result = "¡Te has pasado!";
      this.count++;
    }
    else if(this.sum > this.num){
      this.result = "¡Te has quedado corto!";
      this.count++;
    }

    if(this.count == 4){
      this.playerLevel();
    }
  }

  playerLevel(){
    switch(this.count){
      case 1:
        this.level = "¡¡Así me gusta Crack!!";
        break;
      case 2:
        this.level ="¡¡No está mal!!";
        break;
        case 3:
          this.level ="¡¡A la tercera va la vencida!!";
          break;
          case 4:
            this.level ="¡¡Hinca los más los codos!!";
            break;
    }
  }

  reinicia(){
    
    this.num = null;
    this.num1 = this.numAleatorio(0, 100);
    this.num2 = this.numAleatorio(0, 100);
    this.result = "";
    this.level = "";
    this.count = 0;
    this.check = false;
  }
}
