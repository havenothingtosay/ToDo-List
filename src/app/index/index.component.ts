import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  showNew: boolean = false;
  newItem: object = {
    content: '',
    cycle: 1
  };
  today: Date = new Date();

  list: Item[] = [
      {
        content: '一个一次性任务',
        complete: false,
        cycle: 1
      },
      {
        content: '一个每日任务',
        complete: false,
        cycle: 2
      },
      {
        content: '一个每周任务',
        complete: true,
        cycle: 3
      }
  ];

  constructor() { }

  ngOnInit() {
  }

  add() {
    console.log(this.newItem);
    this.list.push(new Item(this.newItem));
    this.newItem = {content: '', cycle: 1};
    this.showNew = false;
  }
  del(index: number) {
    this.list.splice(index, 1);
  }
}
class Item {
  content: string;
  complete: boolean;
  cycle: number;
  constructor(newItem) {
    this.content = newItem.content;
    this.complete = false;
    this.cycle = newItem.cycle ? newItem.cycle : 1; // 1：一次，2：每日，3：每周，4：每月
  }
}
