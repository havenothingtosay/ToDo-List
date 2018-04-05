import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  showNew: boolean = true;  // 是否显示添加新项
  newItem: object = {
    content: '',
    cycle: 1
  };
  showOption: boolean = false;  // select是否展开
  cycleName: string = '一次';   // select选中的内容

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

  constructor(
      private el: ElementRef
  ) {}

  ngOnInit() {
  }

  // 未完成项目数量
  uncompleteLength() {
    return this.list.filter(item => {
      return item.complete === false;
    }).length;
  }

  // 改变select选项
  changeSelect(value, name) {
    this.newItem['cycle'] = value;
    this.cycleName = name;
    this.showOption = false;
  }

  // 添加新项
  add() {
    console.log(this.newItem);
    if (this.newItem['content']) {  // 检查内容是否为空
        this.list.push(new Item(this.newItem));
        this.newItem = {content: '', cycle: 1};
        this.cycleName = '一次';
        // this.showNew = false;
    }else {
        this.el.nativeElement.querySelector('.newContent').placeholder = '请输入内容';
    }
  }
  // 删除项目
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
