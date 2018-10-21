import { CanDeactivate } from "@angular/router";
import { CompanyComponent } from "./../company/company.component";
//  将要守卫的路由当作泛型引入
export class UnsavedGuard implements CanDeactivate<CompanyComponent> {
  canDeactivate(component: CompanyComponent) {
    return window.confirm("您还未保存当前的信息,确定要离开吗！");
  }
}
