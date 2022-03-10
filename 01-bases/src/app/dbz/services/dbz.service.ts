import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Krillin',
          poder: 700
        },
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
      ];

      get personajes(): Personaje[] {
          return [...this._personajes];  //Para romper la referencia con personajes y no poder modificarlo, lo que se hace es
                                         //es crear un arreglo con sus elementos que funcionara igual.
      }

    constructor() {}

    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push( personaje );
    }

}