import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltInPrimitivesDialogComponent } from './components/built-in-primitives-dialog/built-in-primitives-dialog.component';
import { BuiltInPrimitivesMenuComponent } from './components/built-in-primitives-menu/built-in-primitives-menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExtendedDiagnosticsComponent } from './components/extended-diagnostics/extended-diagnostics.component';
import { InjectComponent } from './components/inject/inject.component';
import { OptionalInjectorComponent } from './components/optional-injector/optional-injector.component';
import { PageTitleStrategyComponent } from './components/page-title-strategy/page-title-strategy.component';
import { ProtectedVariableComponent } from './components/protected-variable/protected-variable.component';
import { StandaloneComponent } from './components/standalone/standalone.component';
import { TypedFormsComponent } from './components/typed-forms/typed-forms.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'typed-forms',
    component: TypedFormsComponent,
  },
  {
    path: 'standalone-component',
    component: StandaloneComponent,
  },
  {
    path: 'inject',
    component: InjectComponent,
  },
  {
    path: 'built-in-primitivess-menu',
    component: BuiltInPrimitivesMenuComponent,
  },
  {
    path: 'built-in-primitivess-dialog',
    component: BuiltInPrimitivesDialogComponent,
  },
  {
    path: 'protected-variable',
    component: ProtectedVariableComponent,
  },
  {
    path: 'page-title-strategy',
    component: PageTitleStrategyComponent,
  },
  {
    path: 'optional-injector',
    component: OptionalInjectorComponent,
  },
  {
    path: 'extended-diagnostics',
    component: ExtendedDiagnosticsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
