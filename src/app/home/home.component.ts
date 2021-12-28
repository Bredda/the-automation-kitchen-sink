import { Component, OnInit } from '@angular/core';
import CustomRoute from '@app/shared/model/custom-route';
import AppRoutes from '@app/shared/routes';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  links: CustomRoute[] = AppRoutes;

  constructor() {}

  ngOnInit(): void {}
}
