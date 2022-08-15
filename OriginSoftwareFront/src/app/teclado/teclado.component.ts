import { Component, OnInit } from '@angular/core';
import { Output, Input, EventEmitter } from '@angular/core';
import { CardapiService } from '../services/cardapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent implements OnInit {
  title: string = 'Aqui el titulo';
  cardinfo: any;
  screen:string='';
  @Output() screeenNumber = new EventEmitter<string>();
  @Input() showExitButton:boolean = false;
  @Input() mask:string ='';

  constructor(private apiService: CardapiService, private router: Router) { }

  ngOnInit(): void {
  }

  enterValue(value: string){
    if(this.screen.length <= 16){
      this.screen += value;
    }
  }

  emitSubmit() {
    this.screeenNumber.emit(this.screen);
  }

  showExit(){
    return this.showExitButton;
  }

  clear(){
    this.screen = '';
  }

  getMask(){
    return this.mask;
  }
}
