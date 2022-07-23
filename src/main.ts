import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, TitleStrategy } from '@angular/router';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { TitleStrategyService } from './app/services/title-strategy.service';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));











// bootstrapApplication(AppComponent, {
//   providers: [
//     {
//       provide: TitleStrategy,
//       useClass: TitleStrategyService,
//     },
//     importProvidersFrom([
//       BrowserModule,
//       AppRoutingModule,
//       BrowserAnimationsModule,
//     ])
//   ]
// })