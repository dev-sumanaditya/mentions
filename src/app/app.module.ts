import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxTributeModule } from 'ngx-tribute';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { MentionsComponent } from './components/mentions/mentions.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    AvatarComponent,
    MentionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTributeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
