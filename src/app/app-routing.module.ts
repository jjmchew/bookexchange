import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowsebooksComponent } from './browsebooks/browsebooks.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'browsebooks', component: BrowsebooksComponent },
  { path: 'addbooks', component: AddbooksComponent },
  { path: 'bookdetails/:id', component: BookDetailsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
