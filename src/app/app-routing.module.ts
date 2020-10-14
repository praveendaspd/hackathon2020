import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgressorListComponent } from './components/progressor-list/progressor-list.component';
import { BannerDetailsComponent } from './components/banner-details/banner-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ProgressorListComponent },
  { path: 'banner', component: BannerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
