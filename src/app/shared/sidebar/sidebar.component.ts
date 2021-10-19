import { Component  } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

get historial(){
  return this.gifsServive.historial;
}

constructor (private gifsServive: GifsService) {}

buscar(termino: string){
  this.gifsServive.buscarGifs(termino);
}

}
