import { Routes } from '@angular/router';
import { MasterComponent } from './component/master/master.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { ClientComponent } from './component/client/client.component';
import { DataComponent } from './component/data/data.component';
import { ClientProjectComponent } from './component/client-project/client-project.component';

export const routes: Routes = [
 {
    path: '',
    redirectTo: 'master',
    pathMatch: 'full'
 },
 {
    path: 'master',
    component: MasterComponent
 },
 {
    path: 'employee',
    component:EmployeeComponent
 },
 {
    path: 'client',
    component: ClientComponent
 },
 {
   path: 'data',
   component: DataComponent
 },
 {
   path: 'client-project',
   component: ClientProjectComponent
 }
];
