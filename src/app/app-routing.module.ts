import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { TableComponent } from './pages/table/table.component';
import { CheckboxesComponent } from './pages/checkboxes/checkboxes.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'table', component: TableComponent },
  { path: 'checkboxes', component: CheckboxesComponent },
 
  { path: '**', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
