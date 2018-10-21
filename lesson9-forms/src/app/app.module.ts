import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { TemplateForm2Component } from './template-form2/template-form2.component';
import { ResponseFormComponent } from './response-form/response-form.component';
import { ResponseForm2Component } from './response-form2/response-form2.component';
import { ResponseForm3Component } from './response-form3/response-form3.component';
import { PwdvalidatorDirectivesDirective } from './directive/pwdvalidator-directives.directive';
import { TelvalidatorDirectivesDirective } from './directive/telvalidator-directives.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    TemplateForm2Component,
    ResponseFormComponent,
    ResponseForm2Component,
    ResponseForm3Component,
    PwdvalidatorDirectivesDirective,
    TelvalidatorDirectivesDirective
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
