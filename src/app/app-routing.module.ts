import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(module => module.PostsModule)
  },
  {path: '', pathMatch: 'full', redirectTo: 'posts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
