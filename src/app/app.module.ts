import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FileUploadModule} from 'primeng/fileupload';
import {CardModule} from 'primeng/card';
import { PrimeFileUploadComponent } from './prime-file-upload/prime-file-upload.component';
import { FormGenComponent } from './form-gen/form-gen.component';
import {FormioModule} from 'angular-formio';
import { FormRenderComponent } from './form-render/form-render.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeFileUploadComponent,
    FormGenComponent,
    FormRenderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FileUploadModule,
    CardModule,
    FormioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
