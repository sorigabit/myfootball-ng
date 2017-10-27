import { Injectable } from '@angular/core';
import { Collectable } from './collectable.model';

@Injectable()
export class CollectableService {
  public collected: Collectable[] = [];
  public uncollected: Collectable[] = [
    {flag: '#F1', description: 'This is description number one'},
    {flag: '#F2', description: 'This is description number two'},
    {flag: '#F3', description: 'This is description number three'},
    {flag: '#F4', description: 'This is description number four'},
    {flag: '#F5', description: 'This is description number five'}
  ];

  constructor() { }
  
  public collect(item: Collectable) {
    this.collected.push(item);
    this.uncollected.splice(this.uncollected.indexOf(item), 1);
  }
  
  public dropFromCollection(item: Collectable) {
    this.uncollected.push(item);
    this.collected.splice(this.collected.indexOf(item), 1);
  }

}
