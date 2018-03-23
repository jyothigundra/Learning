import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { UppercaseDirective } from './shared/directives/uppercase.directive';
import { LocalPipe } from './shared/pipes/local.pipe';
import { LikesComponent } from './components/likes/likes.component';
import { PanelComponent } from './components/panel/panel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    UppercaseDirective,
    LocalPipe,
    LikesComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
