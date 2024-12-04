import { Component, Input, Output, EventEmitter, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../service.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { DxCheckBoxModule, DxNumberBoxModule, DxSelectBoxModule } from 'devextreme-angular';
import { DxFormModule, DxFormTypes } from 'devextreme-angular/ui/form';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-formdev',
  standalone: true,
  imports: [
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxFormModule,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './formdev.component.html',
  styleUrl: './formdev.component.scss'
})




export class FormdevComponent {
  // 
  companies= [{
    ID: 1,
    Name: 'Super Mart of the West',
    Address: '702 SW 8th Street',
    City: 'Bentonville',
    State: 'Arkansas',
    ZipCode: 72716,
    Phone: '(800) 555-2797',
    Fax: '(800) 555-2171',
    Website: '',
    Active: true,
  }, {
    ID: 2,
    Name: 'Electronics Depot',
    Address: '2455 Paces Ferry Road NW',
    City: 'Atlanta',
    State: 'Georgia',
    ZipCode: 30339,
    Phone: '(800) 595-3232',
    Fax: '(800) 595-3231',
    Website: '',
    Active: true,
  }, {
    ID: 3,
    Name: 'K&S Music',
    Address: '1000 Nicllet Mall',
    City: 'Minneapolis',
    State: 'Minnesota',
    ZipCode: 55403,
    Phone: '(612) 304-6073',
    Fax: '(612) 304-6074',
    Website: '',
    Active: true,
  }, {
    ID: 4,
    Name: "Tom's Club",
    Address: '999 Lake Drive',
    City: 'Issaquah',
    State: 'Washington',
    ZipCode: 98027,
    Phone: '(800) 955-2292',
    Fax: '(800) 955-2293',
    Website: '',
    Active: true,
  }];

  width: any;

  labelMode: DxFormTypes.FormLabelMode = 'floating';

  labelLocation: DxFormTypes.LabelLocation = 'left';

  readOnly = false;

  showColon = true;

  minColWidth = 300;

  colCount = 2;

  constructor(service: ServiceService) {
  
  }

  getCompanySelectorLabelMode() {
    return this.labelMode === 'outside'
      ? 'hidden'
      : this.labelMode;
  }
  }
