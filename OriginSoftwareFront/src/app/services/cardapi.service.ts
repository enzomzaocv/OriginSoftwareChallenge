import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CardInfo } from '../interfaces/cardinfo';
import { TransactionResponse } from '../interfaces/transactionresponse'

@Injectable({
  providedIn: 'root'
})
export class CardapiService {
  apiUrl: string = 'https://localhost:7195';
  cardInfo: CardInfo = {
    cardNumber:'',
    pin:''
  };
  withdrawInfo:TransactionResponse = {
    withdraw:0,
		amount:0,
		transactionDateStr:'',
		cardNumber: '',
		expiryDateStr :''
  }

  constructor(private httpClient: HttpClient) { }

  cardExists(body:any):Observable<any>{
    return this.httpClient.post<boolean>(`${this.apiUrl}/Card/CardExists`, body);
  }

  validatePin(body:any):Observable<any>{
    return this.httpClient.post<boolean>(`${this.apiUrl}/Card/ValidatePin`, body);
  }

  addTransaction(body:any):Observable<any>{
    return this.httpClient.post<TransactionResponse>(`${this.apiUrl}/Transaction/CreateTransaction`, body);
  }

  clearCardInfo(){
    this.cardInfo = {
      cardNumber: '',
      pin:''
    };
  } 

  setCardInfo(cardNumber:string, pin:string){
    this.cardInfo = {
      cardNumber: cardNumber,
      pin:pin
    };
  }

  getCardInfo(){
    return this.cardInfo;
  }

  setWithdrawInfo(withdrawInfo:TransactionResponse){
    this.withdrawInfo = withdrawInfo;
  }

  clearWithdrawInfo(){
    this.withdrawInfo = {
      withdraw:0,
      amount:0,
      transactionDateStr:'',
      cardNumber: '',
      expiryDateStr :''
    };
  }

  getWithdrawInfo(){
    return this.withdrawInfo;
  }
}