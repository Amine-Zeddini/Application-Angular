import { Component, Output, EventEmitter, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DataComponent } from '../data/data.component';
import { DxButtonModule, DxDataGridModule, DxPopupModule } from 'devextreme-angular';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-popup',
  standalone: true,
  imports: [RouterOutlet,RouterModule,DataComponent,DxDataGridModule, DxButtonModule, DxPopupModule,ReactiveFormsModule],
  templateUrl: './form-popup.component.html',
  styleUrl: './form-popup.component.scss'
})
export class FormPopupComponent {
  @Input() visible: any;
  @Input() customer: any;
  @Input() isEditMode: boolean = false;
  @Output() close = new EventEmitter<void>();
  selectedCustomerId: any ;
  currentCustomer: any;
  popupVisible = false;
  formPopupVisible = false;
  customerPopupVisible = false;
  buttonText: any;
  




 

  closePopup() {
    this.close.emit();
  
  }
 


  


}
