import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  num:number;
  num1:number = this.numAleatorio(0,100);
  num2:number = this.numAleatorio(0,100);
  num3:number = this.numAleatorio(0,100);
  num4:number = this.numAleatorio(0,100);
  num5:number = this.numAleatorio(0,100);
  num6:number = this.numAleatorio(0,100);
  numIn1:number;
  numIn2:number;
  numIn3:number;
  numIn4:number;
  numIn5:number;
  numIn6:number;
  arrayNum:number[];
  arrayZeros:number[];
  errorMsg = "";
  checkSuccess:boolean;
  erroNum:number;
  result = "";
  level = "";
  checkNumber:number;
  check:boolean = false;

  constructor() {}

  numAleatorio(a,b) {
    return Math.round(Math.random() * (b - a) + parseInt(a, 10));
  }

  comAleatorio(){
    if(this.num1 == this.num2){
      this.num2 = this.numAleatorio(0, 100);
      return;
    }

    if(this.num2 == this.num3){
      this.num3 = this.numAleatorio(0, 100);
      return;
    }

    if(this.num3 == this.num4){
      this.num4 = this.numAleatorio(0, 100);
      return;
    }

    if(this.num4 == this.num5){
      this.num5 = this.numAleatorio(0, 100);
      return;
    }

    if(this.num5 == this.num6){
      this.num6 = this.numAleatorio(0, 100);
      return;
    }
  }

  checkInput(){
    this.arrayNum = [this.numIn1, this.numIn2, this.numIn3, this.numIn4, this.numIn5, this.numIn6];
    this.arrayZeros = [0, 0, 0, 0, 0, 0];
    for (let num in this.arrayNum){
      if(this.arrayNum[num] == null){
        this.arrayZeros[num] = 1;
        this.errorMsg = "No se ha introducido ningún valor en el campo";
        this.checkSuccess = false;
      }
      else {
        this.checkSuccess = true;  
      }
    }
    if(this.checkSuccess){
      this.checkAnswer();
    }
    if(!this.checkSuccess){
      this.result="Repasa los campos";
    }
  }

  checkAnswer(){
    if(this.numIn1 > this.numIn2){
      if(this.numIn2 > this.numIn3){
        if(this.numIn3 > this.numIn4){
          if(this.numIn4 > this.numIn5){
            if(this.numIn5 > this.numIn6){
              this.check=true;
              this.checkNumber=6;
            }
            else {
              this.result = "El número " + this.numIn5 + " no es mayor que " + this.numIn6;
              this.checkNumber=5;
            }
          }
          else {
            this.result = "El número " + this.numIn4 + " no es mayor que " + this.numIn5;
            this.checkNumber=4;
          }
        }
        else {
          this.result = "El número " + this.numIn3 + " no es mayor que " + this.numIn4;
          this.checkNumber=3;
        }
      }
      else {
        this.result = "El número " + this.numIn2 + " no es mayor que " + this.numIn3;
        this.checkNumber=2; 
      }
    }
    else {
      this.result = "El número " + this.numIn1 + " no es mayor que " + this.numIn2;
      this.checkNumber=1;
    }
  }



  reinicia(){
    
    this.checkNumber, this.numIn1, this.numIn2, this.numIn3, this.numIn4, this.numIn5, this.numIn6 = null;
    this.num1 = this.numAleatorio(0, 100);
    this.num2 = this.numAleatorio(0, 100);
    this.num3 = this.numAleatorio(0, 100);
    this.num4 = this.numAleatorio(0, 100);
    this.num5 = this.numAleatorio(0, 100);
    this.num6 = this.numAleatorio(0, 100);
    this.result = "";
    this.level = "";
    //this.count = 0;
    this.check = false;
  }
  /*

  playerLevel(){
    switch(this.count){
      case 1:
        this.level = "Crack!!";
        break;
      case 2:
        this.level ="Bueno!!";
        break;
        case 3:
          this.level ="Normalillo!!";
          break;
          case 4:
            this.level ="...!!";
            break;
    }
  }

  */
}