import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {
  @Input() shippingPrice: number;
  @Input() subtotal: number;
  @Input() total: number;

  constructor() { }

  ngOnInit() {
  }

}

// import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
// import { IBasketTotals } from '../../models/basket';
// import { BasketService } from 'src/app/basket/basket.service';

// @Component({
//   selector: 'app-order-totals',
//   templateUrl: './order-totals.component.html',
//   styleUrls: ['./order-totals.component.scss']
// })
// export class OrderTotalsComponent implements OnInit {
//   basketTotal$: Observable<IBasketTotals>;

//   constructor(private basketService: BasketService) { }

//   ngOnInit(): void {
//     this.basketTotal$ = this.basketService.basketTotal$;
//   }

// }
