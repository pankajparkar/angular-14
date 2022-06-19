import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const componentImports = [
  CommonModule,
  RouterModule,
];
const matImports = [
  MatCardModule,
  MatButtonModule,
];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ...componentImports,
    ...matImports,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  readonly links = [
    { name: 'Typed Forms', subTitle: 'Strictly Typed forms', path: '/typed-forms', },
    { name: 'Standalone Components', subTitle: 'Magic of Standalone Components', path: '/typed-forms' },
    { name: 'Page Title Strategy', subTitle: 'Manage Page title using router and your own strategy', path: '/page-title-strategy' },
    { name: 'Protected Variable', subTitle: 'Now we can use prototected variables in Angular', path: '/protected-variable' },
    { name: 'Extended diagnostics', subTitle: 'Extend angular CLI diagnosting by making changes into angular.json', path: '/extended-diagnostics' },
    { name: 'Optional Injector', subTitle: 'Now injector are optional for embedded views', path: '/optional-injector' },
    { name: 'CDK Demo', subTitle: 'Cdk demo of menu and dialog', path: '/cdk-demo' },
    { name: 'Inject', subTitle: 'New inject API', path: '/inject' },
  ];
}
