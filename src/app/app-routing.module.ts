import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrimeFileUploadComponent} from './prime-file-upload/prime-file-upload.component';
import {FormGenComponent} from './form-gen/form-gen.component';

const routes: Routes = [
  {
    path: 'primeupload',
    component: PrimeFileUploadComponent
  },
  {
    path: 'builder',
    component: FormGenComponent
  },
  {path: '', redirectTo: 'primeupload', pathMatch: 'full'},
  {path: '**', redirectTo: 'primeupload'}
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
