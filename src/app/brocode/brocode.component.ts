import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brocode',
  templateUrl: './brocode.component.html',
  styleUrls: ['./brocode.component.css']
})
export class BrocodeComponent implements OnInit {

  broname:string = 'Barney';
  constructor() { }

  ngOnInit() {
  }

}
