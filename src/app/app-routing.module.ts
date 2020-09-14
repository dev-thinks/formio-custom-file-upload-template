import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormGenComponent} from './form-gen/form-gen.component';
import {FormRenderComponent} from './form-render/form-render.component';

const routes: Routes = [
  {
    path: 'builder',
    component: FormGenComponent
  },
  {
    path: 'renderer',
    component: FormRenderComponent
  },
  {path: '', redirectTo: 'renderer', pathMatch: 'full'},
  {path: '**', redirectTo: 'renderer'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    enableTracing: false
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
