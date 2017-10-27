import { Component, OnInit } from '@angular/core';

import { Collectable } from '../shared/collectable.model';

import { CollectableService } from '../shared/collectable.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  items: Collectable[] = [];

  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
    this.items = this.collectableService.collected;
  }

  onDropClicked(item: Collectable) {
    this.collectableService.dropFromCollection(item);
  }
}
