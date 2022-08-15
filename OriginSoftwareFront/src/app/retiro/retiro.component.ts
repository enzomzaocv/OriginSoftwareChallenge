import { Component, OnInit } from '@angular/core';
import { CardapiService } from '../services/cardapi.service';
import { Router } from '@angular/router';
import { TransactionResponse } from '../interfaces/transactionresponse';
import { TransactionType } from '../enums/transaction-type';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css']
})
export class RetiroComponent implements OnInit {
  title: string = 'Retiro';
  showExitButton:boolean = true;

  constructor(private apiService: CardapiService, private router: Router) { }

  ngOnInit(): void {
  }

  submitWithdraw(screeenNumber:string){
    let cardInfo = this.apiService.getCardInfo();

    let body ={
      amount: screeenNumber,
      transactionType: TransactionType.Withdraw,
      cardNumber: cardInfo.cardNumber,
      pin: cardInfo.pin
    };

    this.apiService.addTransaction(body)
    .subscribe({
      next:(response:TransactionResponse) =>{
        this.validateWithdraw(response);
      },
      error:(error) => {
        this.router.navigate(['/error']);
      }
    });
  }

  validateWithdraw(response:TransactionResponse){
    if(response.cardNumber.length == 16){
      this.apiService.setWithdrawInfo(response);
      this.router.navigate(['/reporte']);
    }else{
      alert("No se ha podido procesar la transaccion.");
      this.router.navigate(['/error']);
    }
  }
}