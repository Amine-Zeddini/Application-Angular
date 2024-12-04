import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgModule, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { DataComponent } from '../data/data.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { DxDataGridModule, DxButtonModule, DxPopupModule } from 'devextreme-angular';

@Component({
  selector: 'app-customer-popup',
  standalone: true,
  imports: [RouterOutlet,RouterModule,DataComponent,DxDataGridModule, DxButtonModule, DxPopupModule],
  templateUrl: './customer-popup.component.html',
  styleUrl: './customer-popup.component.scss'
})
export class CustomerPopupComponent {
  @Input() customer: any;
  @Input() visible: any;
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }

}
