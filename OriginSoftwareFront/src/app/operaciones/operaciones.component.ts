import { Component, OnInit } from '@angular/core';
import { CardapiService } from '../services/cardapi.service';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {

  constructor(private apiService: CardapiService) { }

  ngOnInit(): void {
    this.apiService.clearWithdrawInfo();
  }
}
