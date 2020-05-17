import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';

  constructor(private basketService: BasketService,
              private accountService: AccountService) {
    
  }

  ngOnInit(): void {
    this.loadBasket();
    this.loadCurrentUser();
    // this.http.get('https://localhost:5001/api/products?pageSize=50').subscribe(
    //   (response: IPagination) => {
    //   this.products = response.data;
    // }, error => {
    //   console.log(error);
    // });
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');
    if (token) {
      this.accountService.loadCurrentUser(token).subscribe(() => {
        console.log("user");
      }, error => {
        console.log(error);
      });
    }
  }

  loadBasket() {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe(() => {

      }, error => {
        
      })
    }
  }
}
