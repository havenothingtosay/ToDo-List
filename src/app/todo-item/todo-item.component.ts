import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item;
  @Input() i;

  @Output() delEvent = new EventEmitter();

  editable: boolean = false;
  click: number = 0;  // 判断点击次数

  cycleDefine= ['一次', '每日', '每周', '每月'];

  constructor() { }

  ngOnInit() {
  }
  changeComplete() {
      this.item.complete = !this.item.complete;
      this.editable = false;
  }
  del(i) {
    this.delEvent.emit(this.i);
  }
  // 判断双击事件
  caseClick() {
    this.click++;
    if (this.click > 1) {
      this.edit();
      this.click = 0;
    }else {
      setTimeout(() => {
        this.click = 0;
      }, 300);
    }
  }
  // 改成可编辑状态
  edit() {
    this.editable = true;
    this.item.complete = false;
  }
  saveEdit() {
    this.editable = false;
  }

}
