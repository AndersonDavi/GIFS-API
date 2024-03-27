import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckBoxService {
  mostrarValor: boolean = false;
  url: string = '';
  setMostrarValor(valor: boolean): void {
    this.mostrarValor = valor;
    this.url = '/servicio/';

    console.log(`${this.url}consutar.php`);
    console.log('${this.url}consutar.php');
  }

  getMostrarValor(): boolean {
    return this.mostrarValor;
  }
}
