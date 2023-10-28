import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './pages/form/form.component';
import { TableComponent } from './pages/table/table.component';
import { CheckboxesComponent } from './pages/checkboxes/checkboxes.component';
import { PersonModalComponent } from './components/person-modal/person-modal.component';

import { IgxGridModule, IgxButtonGroupModule } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    CheckboxesComponent,
    PersonModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    IgxPreventDocumentScrollModule,
    IgxGridModule,
    IgxButtonGroupModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
