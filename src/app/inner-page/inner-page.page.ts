import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-page',
  templateUrl: './inner-page.page.html',
  styleUrls: ['./inner-page.page.scss'],
})
export class InnerPagePage implements OnInit {
    tasks:string[]=['one','two','three'];
    _newTask:[];
    addTask:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  addItem(){
    this.addTask=true;
  }

  onSubmit(_newTask){
    console.log(_newTask)
    this.tasks.push(_newTask);
    console.log(this.tasks);
    this.addTask=false;
  }
}
