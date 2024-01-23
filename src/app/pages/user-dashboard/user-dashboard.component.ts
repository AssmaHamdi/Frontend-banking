import { Component } from '@angular/core';
import { info } from '../../components/bank-info/bank-info.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {

  infoList: Array<info> =[];


  constructor(){}


  ngOnInit() : void {
    this.accountInfo();
  }

  private accountInfo() {
    this.infoList=[
      {
        title: 'Account balance',
        amount: 12586,
        infoStyle:  'bg-primary'
      },
      {
        title: 'Highest transaction',
        amount: 1586,
        infoStyle:  'bg-warning'
      },
      {
        title: 'Highest deposit',
        amount: 2686,
        infoStyle:  'bg-success'
      }

    ]

  }

}
