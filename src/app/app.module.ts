import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { UppercaseDirective } from './shared/directives/uppercase.directive';
import { LocalPipe } from './shared/pipes/local.pipe';
import { LikesComponent } from './components/likes/likes.component';
import { PanelComponent } from './components/panel/panel.component';
import { InputFormatDirective } from './shared/directives/input-format.directive';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ZippyComponent } from './components/zippy/zippy.component';
import { CourseformComponent } from './components/courseform/courseform.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    UppercaseDirective,
    LocalPipe,
    LikesComponent,
    PanelComponent,
    InputFormatDirective,
    ContactUsComponent,
    ZippyComponent,
    CourseformComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
