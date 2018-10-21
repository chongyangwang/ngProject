import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { CompanyComponent } from './company/company.component';
import { Page404Component } from './page404/page404.component';
import { CompanydescComponent } from './companydesc/companydesc.component';
import { CompanybossComponent } from './companyboss/companyboss.component';
import { ChatmoneyComponent } from './chatmoney/chatmoney.component';
import { LoginGuard } from './routeresolve/canActive';
import { UnsavedGuard } from './routeresolve/candeActive';
import { CompanyResolve } from './routeresolve/resolve';
const routes: Routes = [
  // 重定向
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatmoneyComponent, outlet: 'chatmoney' },
  // 查询参数传递  queryParams
  // { path: 'company', component: CompanyComponent },
  // 路由路径传递
  {
    path: 'company/:id',
    component: CompanyComponent,
    // canActivate: [LoginGuard],
    // canDeactivate: [UnsavedGuard],
    resolve: {
      company: CompanyResolve
    },
    children: [
      { path: '', component: CompanydescComponent },
      { path: 'boss/:bossName', component: CompanybossComponent }
    ]
  },
  // 匹配404
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CompanyResolve]
})
export class AppRoutingModule {}
