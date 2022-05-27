import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './routerLeaning/start-page/start-page.component';
import { ProductListComponent } from './routerLeaning/product-list/product-list.component';
import { ProductDetailComponent } from './routerLeaning/product-detail/product-detail.component';
import { UserCenterComponent } from './routerLeaning/user-center/user-center.component';
import { NotFoundPageComponent } from './routerLeaning/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartPageComponent },
  { path: 'list', component: ProductListComponent},
  { path: 'detail/:pId', component: ProductDetailComponent },
  { path: 'center', component: UserCenterComponent },
  { path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
