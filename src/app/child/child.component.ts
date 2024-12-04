// import { NgFor, NgIf } from '@angular/common';
// import { Component , EventEmitter, Input, Output, } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { ServiceService } from '../../service.service';

// @Component({
//   selector: 'app-child',
//   standalone: true,
//   imports: [NgFor,NgIf,RouterOutlet],
//   templateUrl: './child.component.html',
//   styleUrl: './child.component.css'
// })
// export class ChildComponent {
//   customer:any;
//   id=5
//   constructor(private service: ServiceService) {
 
   
//   }

//   ngOnInit():void {
//     this.getCustomer()
//   }


//   getCustomer(){
//     this.service.getCustomer(this.id).subscribe((result:any)=> {this.customer=result;
//       console.log("customer",this.customer)
//     });

//   }
  
// }
import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgFor, NgIf, RouterOutlet],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  customer: any;
  id: any;
  constructor(private service: ServiceService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // get the id from route parameters
      this.getCustomer();
    });
  }

  getCustomer(): void {
    this.service.getCustomer(this.id).subscribe((result: any) => {
        this.customer = result;
        console.log('customer', this.customer);
      });
    }
  }
