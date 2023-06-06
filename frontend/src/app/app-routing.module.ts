import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuildComponent } from './build/build.component';
import { ViewComponent } from './view/view.component';
import { PreviewComponent } from './preview/preview.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'build', component: BuildComponent },
  { path: 'view', component: ViewComponent },
  { path: 'preview', component: PreviewComponent },
  {
    path: 'user',
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
