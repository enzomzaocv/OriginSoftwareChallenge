import { Component, OnInit } from '@angular/core';
import { CardapiService } from '../services/cardapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pinvalidation',
  templateUrl: './pinvalidation.component.html',
  styleUrls: ['./pinvalidation.component.css']
})
export class PinvalidationComponent implements OnInit {
  title:string = "Ingrese pin";
  cardInfo:any;
  showExitButton:boolean=true;

  constructor(private apiService: CardapiService, private router: Router) { }

  ngOnInit(): void {
  }

  submitPin(screeenNumber:string){
    let cardInfo = this.apiService.getCardInfo();

    let body = {
      cardNumber: cardInfo.cardNumber,
      pin: screeenNumber
    };

    this.apiService.validatePin(body).subscribe({
      next: (response:boolean) =>{
        if(response){
          this.apiService.setCardInfo(cardInfo.cardNumber, screeenNumber);
          this.router.navigate(['/operaciones']);
        }else{
          alert("PIN invalido");
        }
      },
      error: (error)=>{
        alert(error.error)
      }
    });
  }
}