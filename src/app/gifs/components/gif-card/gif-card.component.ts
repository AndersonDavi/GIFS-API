import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { CheckBoxService } from '../../../shared/services/check-box.service';

@Component({
  selector: 'gif-card',
  templateUrl: './gif-card.component.html',
})
export class GifCardComponent implements OnInit {
  public viewTitle: boolean = false;
  constructor(private checkBoxService: CheckBoxService) {}
  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif value is required');

  }
  get MostrarValor() {
    return this.checkBoxService.getMostrarValor();
  }

}
