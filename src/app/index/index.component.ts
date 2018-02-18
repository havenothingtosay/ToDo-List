import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  showNew: boolean = false;
  newItem: string = '';
  today: Date = new Date();

  list: Item[] = [];

  constructor() { }

  ngOnInit() {
  }

  add() {
    console.log(this.newItem);
    this.list.push(new Item(this.newItem));
    this.newItem = '';
    this.showNew = false;
  }
  del(index: number) {
    this.list.splice(index, 1);
  }
}
class Item {
  content: string;
  complete: boolean;
  constructor(content) {
    this.content = content;
    this.complete = false;
  }
}
