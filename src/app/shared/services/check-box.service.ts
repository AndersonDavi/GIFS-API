import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckBoxService {
  mostrarValor: boolean = false;

  setMostrarValor(valor: boolean): void {
    this.mostrarValor = valor;
  }

  getMostrarValor(): boolean {
    return this.mostrarValor;
  }
}
