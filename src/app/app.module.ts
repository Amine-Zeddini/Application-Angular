import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { ChildComponent } from './child/child.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DevExtremeModule, DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxFormModule, DxNumberBoxModule, DxPopupModule, DxSelectBoxModule, } from 'devextreme-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { GrideComponent } from './gride/gride.component';
import { CustomerPopupComponent } from './customer-popup/customer-popup.component';
import { FormPopupComponent } from './form-popup/form-popup.component';
import { DataComponent } from './data/data.component';
import { ServiceService } from '../service.service';
import { FormdevComponent } from './formdev/formdev.component';
@NgModule({
  declarations: [
    AppComponent, 
    UsersComponent,
    ChildComponent,
    FormdevComponent,
    GrideComponent,
    CustomerPopupComponent,
    FormPopupComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DxPopupModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DevExtremeModule,
    DxNumberBoxModule,
    DxFormModule,
    DxButtonModule,
    DxDataGridModule
    
  ],
  providers: [ServiceService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { } ;
platformBrowserDynamic().bootstrapModule(AppModule);