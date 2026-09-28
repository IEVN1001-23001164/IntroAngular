import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.html',
  styleUrl: './cinepolis.css'
})
export class Cinepolis {

  nombre:string = '';
  compradores:string = '';
  boletos:string = '';
  tarjeta:string = '';

  valor:number = 0;

  precio:number = 120;

  procesar():void{

    let compradores = parseInt(this.compradores);
    let boletos = parseInt(this.boletos);

    let boletosMaximos = compradores * 7;

    if(boletos > boletosMaximos){

      alert('No puedes comprar más de 7 boletos por comprador.');

      this.valor = 0;
    }
    else{

      let subtotal = boletos * this.precio;

      if(this.tarjeta == 'si'){

        if(boletos > 5){
          this.valor = subtotal - (subtotal * 0.15);
        }
        else if(boletos >= 3){
          this.valor = subtotal - (subtotal * 0.10);
        }
        else{
          this.valor = subtotal;
        }

        this.valor = this.valor - (this.valor * 0.10);
      }
      else{

        this.valor = subtotal;
      }
    }
  }
}