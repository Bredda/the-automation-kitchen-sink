import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  links = [
    {
      name: 'Upload a file',
      path: 'upload',
    },
    {
      name: 'Download a file',
      path: 'download',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
