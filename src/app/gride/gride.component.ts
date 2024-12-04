import { Component, enableProdMode} from '@angular/core'
import { NgFor } from '@angular/common';
import { OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { NgIf } from '@angular/common';
import { ChildComponent } from '../child/child.component';
import { DataComponent } from '../data/data.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { DxDataGridModule, DxButtonModule, DxPopupModule } from 'devextreme-angular';
import { jsPDF } from 'jspdf';
import { CustomerPopupComponent } from '../customer-popup/customer-popup.component';
import { FormPopupComponent } from '../form-popup/form-popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import 'jspdf-autotable';





@Component({
  selector: 'app-gride',
  standalone: true,
  imports: [NgFor,NgIf,ChildComponent,RouterOutlet,RouterModule,DataComponent,DxDataGridModule, DxButtonModule, DxPopupModule,
    CustomerPopupComponent,FormPopupComponent,ReactiveFormsModule],
  templateUrl: './gride.component.html',
  styleUrl: './gride.component.scss',
})

export class GrideComponent implements OnInit {
  customers: any[]=[];
  customer:any;
  selectedCustomerId: any ;
  currentCustomer: any;
  popupVisible = false;
  formPopupVisible = false;
  customerPopupVisible = false;
  isEditMode = false;

  moreInfoButtonOptions: any;
  emailButtonOptions: any;
  closeButtonOptions: any;

  constructor(private service: ServiceService,private router: Router) {
  }

  onExporting(event: any) {
    const doc = new jsPDF();
    doc.text('Hello world!', 10, 10);
    doc.save('a4.pdf');
  }
  


   
  

  ngOnInit():void {
    this.getCustomers()
  }
  


  getCustomers(){
    this.service.getCustomers().subscribe((customers:any[])=> {this.customers=customers;
      console.log("customers",this.customers)
    });

  }
  viewCustomerDetails(id: number): void {
    this.router.navigate(['/users/child', id]);
  }
  onButtonClick(id: number) {
    alert(`Button clicked for customer with id: ${id}`);
  }
  showInfo(customer: any) {
    this.currentCustomer = customer;
    this.popupVisible = true;
  }
  closePopup() {
    this.popupVisible = false;
    this.currentCustomer = null;
    this.selectedCustomerId = null;
  }
  openFormPopup(customer: any) {
    this.selectedCustomerId = customer;
    this.isEditMode = true;
    this.formPopupVisible = true;
  }
  openFormPopup1() {
    this.formPopupVisible = true;
    this.isEditMode = false;
  }

  closeFormPopup() {
    this.formPopupVisible = false;
    this.currentCustomer = null;
    this.selectedCustomerId = null;
  }
  exportGridToPDF() {
    const doc = new jsPDF();
    const columns = ["ID", "Title", "Price", "Category", "Description", "Rating (Rate)", "Rating (Count)", "Image URL"];
    const rows = this.customers.map(customer => [
      customer.id,
      customer.title,
      customer.price,
      customer.category,
      customer.description,
      customer.rating.rate,
      customer.rating.count,
      customer.image
    ]);

    doc.text('Customer Data', 14, 16);

    (doc as any).autoTable({
      head: [columns],
      body: rows,
      startY: 20,
      columnStyles: {
        0: { cellWidth: 10},  // ID
        1: { cellWidth: 40 },  // Title
        2: { cellWidth: 15 },  // Price
        3: { cellWidth: 25 },  // Category
        4: { cellWidth: 60 },  // Description
        5: { cellWidth: 10 },  // Rating (Rate)
        6: { cellWidth: 10 },  // Rating (Count)
        7: { cellWidth: 25 }   // Image URL
      },
      styles: {
        fontSize: 10  // General font size
      }
    });

  
    doc.save('customers.pdf');
  }
}

