import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infotaiment',
  templateUrl: './infotaiment.component.html',
  styleUrls: ['./infotaiment.component.css']
})
export class InfotaimentComponent implements OnInit {

  name:string = 'Suren';
  constructor() { }

  ngOnInit() {
  }

}
