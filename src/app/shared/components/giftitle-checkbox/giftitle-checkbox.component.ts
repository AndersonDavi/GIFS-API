import { Component, Output, EventEmitter } from '@angular/core';
import { CheckBoxService } from '../../services/check-box.service';

@Component({
    selector: 'shared-giftitle-checkbox',
    templateUrl: './giftitle-checkbox.component.html',
    standalone: true,
})
export class GIFTitleCheckboxComponent {
  constructor(private checkBoxService: CheckBoxService) {}
  onCheckboxChange(event: any) {
    // this.visibilityChange.emit(event.target.checked);
    this.checkBoxService.setMostrarValor(event.target.checked);
  }
}
