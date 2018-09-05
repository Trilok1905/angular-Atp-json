import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AtpComponent } from './atp/atp.component';
import { AtpRoutingModule } from './atp-routing.module';
import { AddComponent } from './atp/add/add.component';
import { ListComponent } from './atp/list/list.component';
import { ViewComponent } from './atp/view/view.component';
import { TitleComponent } from './atp/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    AtpComponent,
    AddComponent,
    ListComponent,
    ViewComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    HttpClientModule,
    ReactiveFormsModule,
    AtpRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
