import { Component, OnInit } from '@angular/core';

import { Collectable } from '../shared/collectable.model';

import { CollectableService } from '../shared/collectable.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  items: Collectable[] = [];

  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
    this.items = this.collectableService.uncollected;
  }
  
  onBuyClicked(item: Collectable) {
    this.collectableService.collect(item);
  }

}
