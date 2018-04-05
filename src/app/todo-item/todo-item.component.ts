import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Config} from '../app.config';

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

  // cycleDefine= ['一次', '每日', '每周', '每月'];
  cycleDefine = Config.cycleDefine;

  constructor() { }

  ngOnInit() {
  }
  // 改变完成状态
  changeComplete() {
      this.item.complete = !this.item.complete;
      this.editable = false;
  }
  // 删除项目
  del(i) {
    this.delEvent.emit(this.i);
  }
  // 判断双击事件
  caseClick(event) {
    // console.log('阻止冒泡');
    // event.stopPropagation();
    this.click++;
    if (this.click > 1) {
      this.edit();
      this.click = 0;
    }else {
      setTimeout(() => {
        if (this.click === 1) {
          this.changeComplete();
        }
        this.click = 0;
      }, 300);
    }
  }
  // 改成可编辑状态
  edit() {
    this.editable = true;
    this.item.complete = false;
  }
  // 保存编辑
  saveEdit() {
    this.editable = false;
  }

}
