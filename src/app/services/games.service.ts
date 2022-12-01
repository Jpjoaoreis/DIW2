

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  games:string = "https://api.rawg.io/api/games?key=0eea75602e3b4b7b816e2652b4462ac6&dates=2019-09-01,2022-09-30&platforms=18,1,7";
  juego:string = "https://api.rawg.io/api/games?key=0eea75602e3b4b7b816e2652b4462ac6&dates=2019-09-01,2022-09-30&platforms=18,1,7";

  constructor(private _sg:HttpClient) { }

obtenerJuegos(){
  let url = `${this.games}`;
  return this._sg.get(url);
}

detalleJuego(nombre:string){
  let url = `${this.games}/${nombre}`;
  return this._sg.get(url);
}

}


