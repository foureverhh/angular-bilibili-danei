import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId!: string;
  // inject route to load parameter from route
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // efter init, get parameter from route
    this.route.params.subscribe((params)=> {
      console.log(params); 
      //params is an array with 
      this.productId = params['pId'];
    })
  }

}
