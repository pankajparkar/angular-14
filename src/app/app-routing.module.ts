import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltInPrimitivesDialogComponent } from './components/built-in-primitives-dialog/built-in-primitives-dialog.component';
import { BuiltInPrimitivesMenuComponent } from './components/built-in-primitives-menu/built-in-primitives-menu.component';
import { InjectComponent } from './components/inject/inject.component';
import { PageTitleStrategyComponent } from './components/page-title-strategy/page-title-strategy.component';
import { ProtectedVariableComponent } from './components/protected-variable/protected-variable.component';
import { TypedFormsComponent } from './components/typed-forms/typed-forms.component';

const routes: Routes = [
  {
    path: 'typed-forms',
    component: TypedFormsComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
