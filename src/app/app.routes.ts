import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DataComponent } from './data/data.component';
import { ChildComponent } from './child/child.component';
import { NgModule } from '@angular/core';
import { GrideComponent } from './gride/gride.component';
import { FormdevComponent } from './formdev/formdev.component';
export const routes: Routes = [
    {
        path:'users',
        component : UsersComponent
    },
    {
        path:'data',
        component : DataComponent
    },
    {
        path:'gride',
        component : GrideComponent
    },
    {
        path:'formdev',
        component : FormdevComponent
    },
    {
        path:'users/child',
        component : ChildComponent
    },
    {
        path:'users/child/:id',
        component : ChildComponent
    },
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: '**', redirectTo: '/users' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  

  export class AppRoutingModule { }