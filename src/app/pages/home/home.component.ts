import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  services: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.apiService.getProducts().subscribe(data => this.products = data);
    // this.apiService.getServices().subscribe(data => this.services = data);
  }
}
