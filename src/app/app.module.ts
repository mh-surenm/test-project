import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfotaimentComponent } from './infotaiment/infotaiment.component';

import { RouterModule, Routes } from '@angular/router';
import { BrocodeComponent } from './brocode/brocode.component';
import { FirsthtmlComponent } from './firsthtml/firsthtml.component';

const appRoutes: Routes = [
   { path: 'firsthtml', component: FirsthtmlComponent},
  { path: 'infotainment', component: InfotaimentComponent },
  { path: 'home', component: AppComponent},
   { path: 'brocode', component: BrocodeComponent},
  { path: '',
    redirectTo: 'firsthtml',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    InfotaimentComponent,
    BrocodeComponent,
    FirsthtmlComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
