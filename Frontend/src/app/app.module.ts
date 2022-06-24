import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {AddEmployeComponent} from './add-employee/add-employe.component';

import {AppComponent} from './app.component';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';
import {EmployeeFormComponent} from './employee-form/employee-form.component';
import {EmployeeServices} from "./employee.services";
import {ListEmployeesComponent} from './list-employees/list-employees.component';
import {LoadingComponent} from './others-components/loading/loading.component';
import {NotFoundComponent} from './others-components/not-found/not-found.component';

const appRoutes: Routes = [
  {path: '', component: ListEmployeesComponent},
  {path: 'add', component: AddEmployeComponent},
  {path: 'edit/:id', component: EditEmployeeComponent},
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeComponent,
    EditEmployeeComponent,
    EmployeeFormComponent,
    ListEmployeesComponent,
    LoadingComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, CommonModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeServices],
  bootstrap: [AppComponent]
})
export class AppModule {

}
