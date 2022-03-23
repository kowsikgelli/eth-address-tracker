import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {ethers} from 'ethers'
@Injectable({
  providedIn: 'root'
})
export class EthersService {
  public provider:any;
  constructor() { }

  getProvider(){
    this.provider = new ethers.providers.JsonRpcProvider(environment.infura_url);
    return this.provider;
  }
}
