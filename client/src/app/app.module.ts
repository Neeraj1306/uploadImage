import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import {RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { FilesService } from './files.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      
      
      

    ])
  ],
  providers: [FilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
