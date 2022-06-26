import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkDemoComponent } from './components/cdk-demo/cdk-demo.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExtendedDiagnosticsComponent } from './components/extended-diagnostics/extended-diagnostics.component';
import { InjectComponent } from './components/inject/inject.component';
import { OptionalInjectorComponent } from './components/optional-injector/optional-injector.component';
import { PageTitleStrategyComponent } from './components/page-title-strategy/page-title-strategy.component';
import { ProtectedVariableComponent } from './components/protected-variable/protected-variable.component';
import { StandaloneComponent } from './components/standalone/standalone.component';
import { TypedFormsComponent } from './components/typed-forms/typed-forms.component';
import { DynamicTitleService } from './services/dynamic-title.service';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
  },
  {
    path: 'typed-forms',
    component: TypedFormsComponent,
    title: 'Typed Forms',
  },
  {
    path: 'standalone-component',
    component: StandaloneComponent,
    title: 'Standalone Component',
  },
  {
    path: 'inject',
    component: InjectComponent,
    title: DynamicTitleService,
  },
  {
    path: 'cdk-demo',
    component: CdkDemoComponent,
    title: 'CDK Demo',
  },
  {
    path: 'protected-variable',
    component: ProtectedVariableComponent,
    title: 'Protected Variable',
  },
  {
    path: 'page-title-strategy',
    component: PageTitleStrategyComponent,
    title: 'Page Title Strategy',
  },
  {
    path: 'optional-injector',
    component: OptionalInjectorComponent,
    title: 'Optional Injector',
  },
  {
    path: 'extended-diagnostics',
    component: ExtendedDiagnosticsComponent,
    title: 'Extended Diagnostics',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
