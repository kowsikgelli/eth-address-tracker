import { Component, OnInit } from '@angular/core';
import { EthersService } from '../services/ethers.service';
import {ethers} from 'ethers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public address: string = '';
  public provider: any;
  public ethBalance:any;

  constructor(private ethers:EthersService) {}

  ngOnInit(): void {
    this.provider = this.ethers.getProvider();
  }
  async submitAddress(){
    await this.fetchEthBalance();
    console.log(this.ethBalance)
  }
  async fetchEthBalance(){
    const balance = await this.provider.getBalance(this.address)
    this.ethBalance = ethers.utils.formatEther(balance);
  }

}
