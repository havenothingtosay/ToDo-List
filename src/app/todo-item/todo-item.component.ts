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
  edit() {
    this.editable = true;
    this.item.complete = false;
  }
  saveEdit() {
    this.editable = false;
  }

}
