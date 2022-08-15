import { Component, OnInit } from '@angular/core';
import { CardapiService } from '../services/cardapi.service';
import { TransactionType } from '../enums/transaction-type';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})

export class BalanceComponent implements OnInit {
  cardNumber:string = '';
  expiryDate:  string = '';
  amount:number = 0;
  
  constructor(private apiSerice: CardapiService) { }

  ngOnInit(): void {
    this.addBalance();
  }

  addBalance(){
    let cardInfo = this.apiSerice.getCardInfo();

    let body = {
      transactionType: TransactionType.Balance,
      cardNumber: cardInfo.cardNumber,
      pin: cardInfo.pin
    };

    this.apiSerice.addTransaction(body)
    .subscribe({
      next:(response) =>{
        this.setValues(response);
      },
      error(error) {
        alert(error.error)
      },
    });
  }

  setValues(response:any){
    this.cardNumber = response.cardNumber;
    this.expiryDate = response.expiryDateStr;
    this.amount = response.amount;
  }
}
