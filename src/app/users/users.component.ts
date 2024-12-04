import { NgFor } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { NgIf } from '@angular/common';
import { ChildComponent } from '../child/child.component';
import { DataComponent } from '../data/data.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor,NgIf,ChildComponent,RouterOutlet,RouterModule,DataComponent],
 
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  customers: any[]=[];
  customer:any;
  selectedCustomerId: any | null = null;

  constructor(private service: ServiceService,private router: Router) {
 
   
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

  
  }
  
  
  
  
  

  


