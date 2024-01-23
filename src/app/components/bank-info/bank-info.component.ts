import { Component, Input, OnInit } from '@angular/core';
export interface info {
  title?: string;
  amount?: number;
  infoStyle? :'bg-danger' | 'bg-success' | 'bg-primary' | 'bg-warning'
}

@Component({
  selector: 'app-bank-info',
  templateUrl: './bank-info.component.html',
  styleUrl: './bank-info.component.scss'
})
export class BankInfoComponent implements OnInit {


  @Input() infoInput: info={};

  
  constructor(){}
  ngOnInit(): void {
  }

  

}
