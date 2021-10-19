import { ElementRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>;

  constructor (private gifsServive: GifsService){}

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length == 0){
      return
    }
    this.gifsServive.buscarGifs( valor );
    this.txtBuscar.nativeElement.value = "";
  }


}
