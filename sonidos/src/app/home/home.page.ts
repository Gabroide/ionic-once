import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ANIMALES } from 'src/data/data.animales';
import { Animal } from 'src/interfaces/animal';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  animales:Animal[]=[];
  audio = new Audio();
  tiempoAudio:any;

  constructor(public navCtrl:NavController) {
    this.animales=ANIMALES.slice(0);
  }

  reproducir(animal:Animal){
    console.log(animal);

    this.pausarAudio(animal);

    if(animal.reproduciendo){
      animal.reproduciendo=false;
      return;
    }
    
    this.audio.src=animal.audio;
    animal.reproduciendo=true;
    this.audio.load();
    this.audio.play();

    setTimeout(() => {
      animal.reproduciendo=false;
    },
    animal.duracion*100);
  }

  pausarAudio(animalSeleccionado:Animal){
    clearTimeout(this.tiempoAudio);

    this.audio.pause();
    this.audio.currentTime=0;

    for(let animal of this.animales){
      if(animal.nombre != animalSeleccionado.nombre){
        animal.reproduciendo=false;
      }
    }
  }
}
