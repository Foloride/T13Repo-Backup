import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { JqueryComponent } from './jquery/jquery.component';
import { LoggoloComponent } from './loggolo/loggolo.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { Hiba404Component } from './hiba404/hiba404.component';

const routes: Routes = [
  { path: "kezdolap", component: KezdolapComponent },
  { path: "jquery", component: JqueryComponent },
  { path: "loggolo", component: LoggoloComponent },
  { path: "ngif", component: NgifComponent },
  { path: "ngfor", component: NgforComponent },
  { path: "", redirectTo: "kezdolap", pathMatch: "full" },
  { path: "**", component: Hiba404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
