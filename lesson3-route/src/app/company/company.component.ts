import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  private companyId: number;
  private companyName: string;
  constructor(private routeInfo: ActivatedRoute) {}
  ngOnInit() {
    // 1.查询参数取路由传递值
    // this.companyId = this.routeInfo.snapshot.queryParams.id;
    // 2. 路由路径取路由传递的值
    // this.companyId = this.routeInfo.snapshot.params.id;
    // .snpshot 参数快照 弊端：当当前的组建被创建之后 传递的参数不会深度监听 不会更新  如案例中 公司a标签和公司input标签 传递值并未更新(当组建从自身路由到自身)
    // .subscribe深度监听 处理上述当前路由到当前的情况
    this.routeInfo.params.subscribe(
      (params: Params) => (this.companyId = params.id)
    );
    this.routeInfo.data.subscribe((data: { company: Company }) => {
      this.companyId = data.company.id;
      this.companyName = data.company.name;
    });
  }
}

export class Company {
  constructor(public id: number, public name: string) {}
}
