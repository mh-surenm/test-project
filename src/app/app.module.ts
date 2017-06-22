import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfotaimentComponent } from './infotaiment/infotaiment.component';

import { RouterModule, Routes } from '@angular/router';
import { BrocodeComponent } from './brocode/brocode.component';

const appRoutes: Routes = [
  { path: 'infotainment', component: InfotaimentComponent },
  { path: 'home', component: AppComponent},
   { path: 'brocode', component: BrocodeComponent},
  { path: '',
    redirectTo: 'infotainment',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    InfotaimentComponent,
    BrocodeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
