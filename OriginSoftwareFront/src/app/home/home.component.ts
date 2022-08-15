import { Component, OnInit } from '@angular/core';
import { CardapiService } from '../services/cardapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = "Ingrese numero de tarjeta";

  constructor(private apiService: CardapiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.clearCardInfo();
  }

  getCard(cardNumber:string){
    let request = {
      cardNumber : cardNumber
    }

    this.apiService.cardExists(request)
    .subscribe((data:boolean) => {
        if(data){
          this.apiService.setCardInfo(cardNumber,'');
          this.router.navigate(['/pin']);
        }else{
          this.router.navigate(['/error']);
        }
      });
  }

  submitCard(screenNumber:string){
    this.getCard(screenNumber);
  }

  getMask(){
    return '0000 0000 0000 0000';
  }
}
