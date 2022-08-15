import { Component, OnInit } from '@angular/core';
import { CardapiService } from '../services/cardapi.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  cardNumber: string = '';
  withdrawDatetime: string = '';
  withdrawAmount: number = 0;
  Amount: number = 0;

  constructor(private apiService: CardapiService) { }

  ngOnInit(): void {
    this.setViewValues();
  }

  setViewValues(){
    let withdraw = this.apiService.getWithdrawInfo();

    this.cardNumber =  withdraw.cardNumber;
    this.withdrawDatetime = withdraw.transactionDateStr;
    this.withdrawAmount = withdraw.withdraw;
    this.Amount = withdraw.amount;
  }
}
