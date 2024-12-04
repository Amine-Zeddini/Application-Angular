import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { RouterModule, RouterOutlet ,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,HttpClientModule],
  templateUrl : './app.component.html',
  styleUrls: ['./app.component.css']
  

}) 
export class AppComponent  {
  title = 'projetang';

  

  constructor() {
}
}