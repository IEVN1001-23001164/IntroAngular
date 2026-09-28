import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  templateUrl: './palindromo.html',
})
export class Palindromo {

  frase:string = '';
  vocales:string = '';
  consonantes:string = '';
  numeroVocales:number = 0;
  numeroConsonantes:number = 0;
  resultado:string = '';

  calcular():void{

    this.vocales = '';
    this.consonantes = '';
    this.numeroVocales = 0;
    this.numeroConsonantes = 0;
    this.resultado = '';

    let fraseSinEspacios = '';

    // Recorrer la frase
    for(let i = 0; this.frase[i] != undefined; i++){

      let letra = this.frase[i];

      // Ignorar espacios
      if(letra != ' '){

        fraseSinEspacios = fraseSinEspacios + letra;

        // Vocales
        if(letra == 'a' || letra == 'e' || letra == 'i' ||
           letra == 'o' || letra == 'u' ||
           letra == 'A' || letra == 'E' || letra == 'I' ||
           letra == 'O' || letra == 'U'){

          this.vocales = this.vocales + letra + ' ';
          this.numeroVocales++;
        }

        // Consonantes
        else{

          this.consonantes = this.consonantes + letra + ' ';
          this.numeroConsonantes++;
        }
      }
    }

    // Revisar si es palíndromo
    let palindromo = true;

    let izquierda = 0;
    let derecha = 0;

    // Encontrar la última posición
    for(let i = 0; fraseSinEspacios[i] != undefined; i++){
      derecha = i;
    }

    while(izquierda < derecha){

      if(fraseSinEspacios[izquierda] != fraseSinEspacios[derecha]){
        palindromo = false;
      }

      izquierda++;
      derecha--;
    }

    if(palindromo == true){
      this.resultado = 'Sí es un palíndromo';
    }
    else{
      this.resultado = 'No es un palíndromo';
    }
  }
}