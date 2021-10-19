import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = "draTJzUkta9zSCxw4hJis48MCLWTByo2";
  private servicioURL: string = "https://api.giphy.com/v1/gifs";
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial]
  }

  constructor( private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem("Historial")!) || [];
    this.resultados = JSON.parse(localStorage.getItem("Resultados")!) || [];
    
  }

  buscarGifs( query: string = "") {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes (query)) {
      this._historial.unshift(query)
      this._historial = this._historial.splice(0,10);

      localStorage.setItem("Historial", JSON.stringify(this._historial))
    }

    const params = new HttpParams()
      .set("api_key", this.apiKey)
      .set("limit", "10")
      .set("q", query);

    this.http.get<SearchGifsResponse>(`${ this.servicioURL }/search`, { params } )
      .subscribe( (resp: any) => {
        this.resultados = resp.data;
        localStorage.setItem("Resultados", JSON.stringify(this.resultados));

    })


  }

}
