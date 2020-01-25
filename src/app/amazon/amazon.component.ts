import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit {

  item1:string;
  item2:string;
  price1:number;
  price2:number;
  total:number;
  totalBill:number;
  tax:number;
  item11:string;
  item22:string;
  price11:number;
  price22:number;
  bill:string;
  final:number;
  OnClick(price1:number,price2:number) {
    this.total=((this.price1)*1)+((this.price2)*1);
    this.tax=this.total*0.2;
    this.totalBill=this.total+this.tax;
    return this.total;
  }

  Checkout()
  {
    this.item11=this.item1;
    this.item22=this.item2;
    this.price11=this.price1;
    this.price22=this.price2;
    this.bill="Total Bill";
    this.final=this.totalBill;
    return this.final;
  }
  constructor() { }

  ngOnInit() {
  }

}
